import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CollectionResponse,
  GenreResponse,
  MovieData,
  MovieDetails,
  MovieQuery,
  MovieResponse,
  MovieState,
  PersonMovieCreditResponse,
  PersonResponse,
  PopularPersonsResponse,
  Trailer,
} from "../type";
import {
  getAllMovieGenres,
  getDiscoveryMoviesList,
  getMovieCollection,
  getMovieDetails,
  getMoviesBasedOnGenre,
  getMoviesTrailer,
  getMoviesTrend,
  getPersonDetails,
  getPersonMovieCredits,
  getPersons,
  getSpecificDetails,
  getTrendingMovies,
  searchResource,
} from "../../services";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";

type ObjectKey = keyof typeof initialState.trends;
let arg: ObjectKey;
type DetailsObjKey = keyof typeof initialState.details;
let info: DetailsObjKey;

const initialState: MovieState = {
  details: {
    details: {},
    isLoading: true,
    credits: {},
    reviews: {},
    similar: { page: 1, results: [] },
    collection: {},
    trailer: {},
  },
  genres: {
    genre: [],
    isLoading: true,
    movieBasedGenre: { page: 1, results: [] },
  },
  person: { isLoading: true, details: {}, credits: {} },
  persons: { isLoading: true, persons: { results: [] } },
  trends: {
    now_playing: { page: 1, results: [], isLoading: true },
    popular: { page: 1, results: [], isLoading: true },
    top_rated: { page: 1, results: [], isLoading: true },
    upcoming: { page: 1, results: [], isLoading: true },
    discovery: { page: 1, results: [], isLoading: true },
    trending: { page: 1, results: [], isLoading: true },
    search_results: { page: 1, results: [], isLoading: true },
  },
  searchedPerson: { isLoading: true, persons: { results: [] } },
  videoModal: { isOpen: false, youtubeKey: "" },
  watchlist: JSON.parse(localStorage.getItem("watchlist") as string) || [],
  loadMore: false,
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

export const fetchMovieCollection = createAsyncThunk(
  "movies/collection",
  async (query: {
    collection_id: string;
  }): Promise<AxiosResponse<CollectionResponse>> => {
    const { collection_id: collectionID } = query;
    try {
      return await getMovieCollection(collectionID);
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
  }): Promise<AxiosResponse<any>> => {
    const { id, infoType } = query;
    try {
      return await getSpecificDetails(id, infoType);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const fetchPersonDetails = createAsyncThunk(
  "person/details",
  async (query: {
    personId: string;
  }): Promise<AxiosResponse<PersonResponse>> => {
    const { personId } = query;
    try {
      return await getPersonDetails(personId);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const fetchPersonMovieCredits = createAsyncThunk(
  "person/movie-credits",
  async (query: {
    personId: string;
  }): Promise<AxiosResponse<PersonMovieCreditResponse>> => {
    const { personId } = query;
    try {
      return await getPersonMovieCredits(personId);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const fetchPopularPersons = createAsyncThunk(
  "person/popular",
  async (query: {
    page: string;
  }): Promise<AxiosResponse<PopularPersonsResponse>> => {
    const { page } = query;
    try {
      return await getPersons(page);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const fetchMoviesBasedOnGenre = createAsyncThunk(
  "genre/movies_with_genre",
  async (query: {
    page: string;
    genre: string;
  }): Promise<AxiosResponse<MovieResponse>> => {
    const { page, genre } = query;
    try {
      return await getMoviesBasedOnGenre(page, genre);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const fetchMovieTrailer = createAsyncThunk(
  "movie/trailer",
  async (query: {
    id: string;
  }): Promise<AxiosResponse<{ id: string; results: Trailer[] }>> => {
    const { id } = query;
    try {
      return await getMoviesTrailer(id);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const searchPerson = createAsyncThunk(
  "search/person",
  async (query: {
    searchedPhrase: string;
    page: string;
  }): Promise<AxiosResponse<PopularPersonsResponse>> => {
    const { searchedPhrase, page } = query;
    try {
      return await searchResource(searchedPhrase, "person", page);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const searchMovie = createAsyncThunk(
  "search/movie",
  async (query: {
    searchedPhrase: string;
    page: string;
  }): Promise<AxiosResponse<MovieResponse>> => {
    const { searchedPhrase, page } = query;
    try {
      return await searchResource(searchedPhrase, "movie", page);
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
      state.trends[payload].page = state.trends[payload].page += 1;
    },
    setPageGenre: (state) => {
      state.genres.movieBasedGenre.page =
        state.genres.movieBasedGenre.page += 1;
    },
    addToWatchlist: (
      state,
      action: PayloadAction<MovieData | MovieDetails>,
    ) => {
      state.watchlist = state.watchlist.concat(action.payload);
      localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
      toast.success("Movie added to watchlist");
    },
    deleteFromWatchlist: (
      state,
      action: PayloadAction<MovieData | MovieDetails>,
    ) => {
      state.watchlist = state.watchlist.filter(
        (movie: MovieData | MovieDetails) => movie.id !== action.payload.id,
      );
      localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
      toast.success("Movie removed from watchlist");
    },
    cleanupGenre: (state) => {
      state.genres.movieBasedGenre.results = [];
      state.genres.movieBasedGenre.page = 1;
    },
    cleanupCategories: (state, action) => {
      const trendToBeCleaned = action.payload as ObjectKey;
      state.trends[trendToBeCleaned].results = [];
      state.trends[trendToBeCleaned].page = 1;
    },
    showVideoModal: (state) => {
      state.videoModal.isOpen = true;
    },
    hideVideoModel: (state) => {
      state.videoModal.isOpen = false;
    },
  },
  extraReducers: function (builder) {
    builder
      .addCase(fetchMoviesTrend.pending, (state, { meta }) => {
        arg = meta.arg.trend as ObjectKey;
        state.loadMore = true;
        state.trends[arg].isLoading = true;
      })
      .addCase(fetchMoviesTrend.fulfilled, (state, { payload, meta }) => {
        arg = meta.arg.trend as ObjectKey;
        const trendsArray: ObjectKey[] = [];
        state.loadMore = false;
        state.trends[arg].isLoading = false;
        trendsArray.map((i): void => {
          if (i != arg) {
            state.trends[i].page = 1;
            state.trends[i].results = [];
          }
        });
        state.trends[arg].page = payload.data.page;
        state.trends[arg].results = [
          ...state.trends[arg].results,
          ...payload.data.results,
        ];
      })
      .addCase(fetchMoviesTrend.rejected, (state, { meta }) => {
        arg = meta.arg.trend as ObjectKey;
        state.loadMore = false;
        state.trends[arg].isLoading = false;
      })
      .addCase(discoverMovies.pending, (state) => {
        state.loadMore = true;
        state.trends.discovery.isLoading = true;
      })
      .addCase(discoverMovies.fulfilled, (state, { payload }) => {
        state.loadMore = false;
        state.trends.discovery.isLoading = false;
        state.trends.discovery.results = [
          ...state.trends.discovery.results,
          ...payload.data.results,
        ];
      })
      .addCase(discoverMovies.rejected, (state) => {
        state.loadMore = false;
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
        state.loadMore = true;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, { payload }) => {
        state.trends.trending.isLoading = false;
        state.loadMore = false;
        state.trends.trending.results = [
          ...state.trends.trending.results,
          ...payload.data.results,
        ];
      })
      .addCase(fetchTrendingMovies.rejected, (state) => {
        state.trends.trending.isLoading = false;
        state.loadMore = false;
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
      .addCase(fetchSpecificDetails.fulfilled, (state, { payload, meta }) => {
        info = meta.arg.infoType as DetailsObjKey;
        state.details.isLoading = false;
        state.details[info] = payload.data;
      })
      .addCase(fetchSpecificDetails.rejected, (state) => {
        state.details.isLoading = false;
      })
      .addCase(fetchMovieCollection.pending, (state) => {
        state.details.isLoading = true;
      })
      .addCase(fetchMovieCollection.fulfilled, (state, { payload }) => {
        state.details.isLoading = false;
        state.details.collection = payload.data;
      })
      .addCase(fetchMovieCollection.rejected, (state) => {
        state.details.isLoading = false;
      })
      .addCase(fetchPersonDetails.pending, (state) => {
        state.person.isLoading = true;
      })
      .addCase(fetchPersonDetails.fulfilled, (state, { payload }) => {
        state.person.isLoading = false;
        state.person.details = payload.data;
      })
      .addCase(fetchPersonDetails.rejected, (state) => {
        state.person.isLoading = false;
      })
      .addCase(fetchPersonMovieCredits.pending, (state) => {
        state.person.isLoading = true;
      })
      .addCase(fetchPersonMovieCredits.fulfilled, (state, { payload }) => {
        state.person.isLoading = false;
        state.person.credits = payload.data;
      })
      .addCase(fetchPersonMovieCredits.rejected, (state) => {
        state.person.isLoading = false;
      })
      .addCase(fetchPopularPersons.pending, (state) => {
        if (state.persons.persons.results.length === 0) {
          state.persons.isLoading = true;
        }
      })
      .addCase(fetchPopularPersons.fulfilled, (state, { payload }) => {
        state.persons.isLoading = false;
        state.persons.persons.results = state.persons.persons.results.concat(
          payload.data.results,
        );
      })
      .addCase(fetchPopularPersons.rejected, (state) => {
        state.persons.isLoading = false;
      })
      .addCase(fetchMoviesBasedOnGenre.pending, (state) => {
        state.genres.movieBasedGenre.isLoading = true;
      })
      .addCase(
        fetchMoviesBasedOnGenre.fulfilled,
        (state, { payload, meta }) => {
          state.genres.movieBasedGenre.isLoading = false;
          state.genres.movieBasedGenre.results =
            state.genres.movieBasedGenre.results.concat(payload.data.results);
        },
      )
      .addCase(fetchMoviesBasedOnGenre.rejected, (state) => {
        state.genres.movieBasedGenre.isLoading = false;
      })
      .addCase(fetchMovieTrailer.pending, (state) => {
        state.details.isLoading = true;
      })
      .addCase(fetchMovieTrailer.fulfilled, (state, { payload, meta }) => {
        state.details.isLoading = false;
        state.details.trailer = !payload.data.results.filter(
          (m: Trailer) => m.name === "Official Trailer",
        )[0]
          ? payload.data.results.filter(
              (m: Trailer) => m.name?.includes("Trailer"),
            )[0]
          : payload.data.results.filter(
              (m: Trailer) => m.name === "Official Trailer",
            )[0];
      })
      .addCase(fetchMovieTrailer.rejected, (state) => {
        state.details.isLoading = false;
      })
      .addCase(searchPerson.pending, (state) => {
        if (state.searchedPerson.persons.results.length === 0) {
          state.searchedPerson.isLoading = true;
        }
      })
      .addCase(searchPerson.fulfilled, (state, { payload }) => {
        state.searchedPerson.isLoading = false;
        state.searchedPerson.persons.results =
          state.persons.persons.results.concat(payload.data.results);
      })
      .addCase(searchPerson.rejected, (state) => {
        state.persons.isLoading = false;
      })
      .addCase(searchMovie.pending, (state) => {
        state.loadMore = true;
        state.trends.search_results.isLoading = true;
      })
      .addCase(searchMovie.fulfilled, (state, { payload }) => {
        state.loadMore = false;
        state.trends.search_results.isLoading = false;
        state.trends.search_results.results = [
          ...state.trends.search_results.results,
          ...payload.data.results,
        ];
      })
      .addCase(searchMovie.rejected, (state) => {
        state.loadMore = false;
        state.trends.search_results.isLoading = false;
      });
  },
});

export const {
  setPage,
  addToWatchlist,
  deleteFromWatchlist,
  setPageGenre,
  cleanupGenre,
  cleanupCategories,
  showVideoModal,
  hideVideoModel,
} = movieSlice.actions;

export default movieSlice.reducer;
