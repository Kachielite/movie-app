import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CreditResponse,
  GenreResponse,
  MovieDetails,
  MovieQuery,
  MovieResponse,
  MovieState,
} from "../type";
import {
  getAllMovieGenres,
  getDiscoveryMoviesList,
  getMovieDetails,
  getMoviesTrend,
  getSpecificDetails,
  getTrendingMovies,
} from "../../services";
import { AxiosResponse } from "axios";

type ObjectKey = keyof typeof initialState.trends;
let arg: ObjectKey;

const initialState: MovieState = {
  details: { details: {}, isLoading: true, credits: {} },
  genres: { genre: [], isLoading: true },
  trends: {
    now_playing: { page: 1, results: [], isLoading: true },
    popular: { page: 1, results: [], isLoading: true },
    top_rated: { page: 1, results: [], isLoading: true },
    upcoming: { page: 1, results: [], isLoading: true },
    discovery: { page: 1, results: [], isLoading: true },
    trending: { page: 1, results: [], isLoading: true },
  },
};

export const fetchMoviesTrend = createAsyncThunk(
  "movies/fetchMoviesTrend",
  async (query: MovieQuery): Promise<AxiosResponse<MovieResponse>> => {
    const { trend, page } = query;
    try {
      return await getMoviesTrend(trend as string, page);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const discoverMovies = createAsyncThunk(
  "movies/discover",
  async (query: MovieQuery): Promise<AxiosResponse<MovieResponse>> => {
    const { page } = query;
    try {
      return await getDiscoveryMoviesList(page);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const fetchAllGenre = createAsyncThunk(
  "movies/genres",
  async (): Promise<AxiosResponse<GenreResponse>> => {
    try {
      return await getAllMovieGenres();
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const fetchTrendingMovies = createAsyncThunk(
  "movies/trending",
  async (): Promise<AxiosResponse<MovieResponse>> => {
    try {
      return await getTrendingMovies();
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/details",
  async (query: { id: string }): Promise<AxiosResponse<MovieDetails>> => {
    const { id } = query;
    try {
      return await getMovieDetails(id);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const fetchSpecificDetails = createAsyncThunk(
  "movies/specific-details",
  async (query: {
    id: string;
    infoType: string;
  }): Promise<AxiosResponse<CreditResponse>> => {
    const { id, infoType } = query;
    try {
      return await getSpecificDetails(id, infoType);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<ObjectKey>) => {
      const { payload } = action;
      state.trends[payload].page = state.trends[payload].page++;
    },
  },
  extraReducers: function (builder) {
    builder
      .addCase(fetchMoviesTrend.pending, (state, { meta }) => {
        arg = meta.arg.trend as ObjectKey;
        state.trends[arg].isLoading = true;
      })
      .addCase(fetchMoviesTrend.fulfilled, (state, { payload, meta }) => {
        arg = meta.arg.trend as ObjectKey;
        state.trends[arg].isLoading = false;
        state.trends[arg].results = [
          ...state.trends[arg].results,
          ...payload.data.results,
        ];
      })
      .addCase(fetchMoviesTrend.rejected, (state) => {
        state.trends.discovery.isLoading = false;
      })
      .addCase(discoverMovies.pending, (state) => {
        state.trends.discovery.isLoading = true;
      })
      .addCase(discoverMovies.fulfilled, (state, { payload }) => {
        state.trends.discovery.isLoading = false;
        state.trends.discovery.results = [
          ...payload.data.results,
          ...payload.data.results,
        ];
      })
      .addCase(discoverMovies.rejected, (state) => {
        state.trends.discovery.isLoading = false;
      })
      .addCase(fetchAllGenre.pending, (state) => {
        state.genres.isLoading = true;
      })
      .addCase(fetchAllGenre.fulfilled, (state, { payload }) => {
        state.genres.isLoading = false;
        state.genres.genre = payload.data.genres;
      })
      .addCase(fetchAllGenre.rejected, (state) => {
        state.genres.isLoading = false;
      })
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.trends.trending.isLoading = true;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, { payload }) => {
        state.trends.trending.isLoading = false;
        state.trends.trending.results = [
          ...state.trends.trending.results,
          ...payload.data.results,
        ];
      })
      .addCase(fetchTrendingMovies.rejected, (state) => {
        state.trends.trending.isLoading = false;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.details.isLoading = true;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, { payload }) => {
        state.details.isLoading = false;
        state.details.details = payload.data;
      })
      .addCase(fetchMovieDetails.rejected, (state) => {
        state.details.isLoading = false;
      })
      .addCase(fetchSpecificDetails.pending, (state) => {
        state.details.isLoading = true;
      })
      .addCase(fetchSpecificDetails.fulfilled, (state, { payload }) => {
        state.details.isLoading = false;
        state.details.credits = payload.data;
      })
      .addCase(fetchSpecificDetails.rejected, (state) => {
        state.details.isLoading = false;
      });
  },
});

export const { setPage } = movieSlice.actions;

export default movieSlice.reducer;
