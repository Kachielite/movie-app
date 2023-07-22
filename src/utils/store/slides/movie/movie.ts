import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieQuery, MovieState } from "./type";
import { getDiscoveryMoviesList, getMoviesTrend } from "../../../services";
import { AxiosResponse } from "axios";
import { MovieData, MovieResponse } from "../../type";

const initialState: MovieState = {
  now_playing: { page: 1, results: [], isLoading: true },
  popular: { page: 1, results: [], isLoading: true },
  top_rated: { page: 1, results: [], isLoading: true },
  upcoming: { page: 1, results: [], isLoading: true },
  discovery: { page: 1, results: [], isLoading: true },
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

type ObjectKey = keyof typeof initialState;
let arg: ObjectKey;

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<ObjectKey>) => {
      const { payload } = action;
      state[payload].page = state[payload].page++;
    },
  },
  extraReducers: function (builder) {
    builder
      .addCase(fetchMoviesTrend.pending, (state, { meta }) => {
        arg = meta.arg.trend as ObjectKey;
        state[arg].isLoading = true;
      })
      .addCase(fetchMoviesTrend.fulfilled, (state, { payload, meta }) => {
        arg = meta.arg.trend as ObjectKey;
        state[arg].isLoading = false;
        state[arg].results = [...state[arg].results, ...payload.data.results];
      })
      .addCase(fetchMoviesTrend.rejected, (state) => {
        state.discovery.isLoading = false;
      })
      .addCase(discoverMovies.pending, (state) => {
        state.discovery.isLoading = true;
      })
      .addCase(discoverMovies.fulfilled, (state, { payload }) => {
        state.discovery.isLoading = false;
        state.discovery.results = [
          ...payload.data.results,
          ...payload.data.results,
        ];
      })
      .addCase(discoverMovies.rejected, (state) => {
        state.discovery.isLoading = false;
      });
  },
});

export const { setPage } = movieSlice.actions;

export default movieSlice.reducer;
