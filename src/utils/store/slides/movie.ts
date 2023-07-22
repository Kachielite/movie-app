import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Genre,
  GenreResponse,
  MovieQuery,
  MovieResponse,
  MovieState,
} from "../type";
import {
  getAllMovieGenres,
  getDiscoveryMoviesList,
  getMoviesTrend,
} from "../../services";
import { AxiosResponse } from "axios";

type ObjectKey = keyof typeof initialState.trends;
let arg: ObjectKey;

const initialState: MovieState = {
  trends: {
    now_playing: { page: 1, results: [], isLoading: true },
    popular: { page: 1, results: [], isLoading: true },
    top_rated: { page: 1, results: [], isLoading: true },
    upcoming: { page: 1, results: [], isLoading: true },
    discovery: { page: 1, results: [], isLoading: true },
  },
  genres: { genre: [], isLoading: true },
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
      });
  },
});

export const { setPage } = movieSlice.actions;

export default movieSlice.reducer;
