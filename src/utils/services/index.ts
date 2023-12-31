import { customAxios } from "./customAxios";
import { AxiosResponse } from "axios";

type Movie = "movie";
type TV = "tv";

export const BASE_IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const API_PATHS = {
  getDiscoverList: (type: Movie | TV, page: number): string => {
    return `/discover/${type}?page=${page}&sort_by=popularity.desc`;
  },
  getDiscoveryWithGenre: (page: string, genre: string): string => {
    return `/discover/movie?page=${page}&with_genres=${genre}`;
  },
  getGenres: (type: Movie | TV): string => {
    return `/genre/${type}/list`;
  },
  trends: (trends: string, page: number): string => {
    return `/movie/${trends}?page=${page}`;
  },
  trending: `/trending/movie/day`,

  details: (movie_id: string): string => {
    return `/movie/${movie_id}`;
  },

  info: (movie_id: string, type: string): string => {
    return `/movie/${movie_id}/${type}`;
  },
  collection: (collection_id: string): string => {
    return `/collection/${collection_id}`;
  },
  persons: (page: string): string => {
    return `/person/popular?page=${page}`;
  },
  person: (person_id: string): string => {
    return `/person/${person_id}`;
  },
  personMovieCredits: (person_id: string): string => {
    return `/person/${person_id}/movie_credits`;
  },
  trailer: (movie_id: string): string => {
    return `/movie/${movie_id}/videos`;
  },
  search: (query: string, type: string, page: string): string => {
    return `/search/${type}?query=${query}&page=${page}`;
  },
};

export const getMoviesTrend = async (
  trends: string,
  page: number,
): Promise<AxiosResponse> => {
  try {
    return await customAxios(`${API_PATHS.trends(trends, page)}`);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getDiscoveryMoviesList = async (
  page: number,
): Promise<AxiosResponse> => {
  try {
    return await customAxios(`${API_PATHS.getDiscoverList("movie", page)}`);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getAllMovieGenres = async (): Promise<AxiosResponse> => {
  try {
    return await customAxios(`${API_PATHS.getGenres("movie")}`);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getTrendingMovies = async (): Promise<AxiosResponse> => {
  try {
    return await customAxios(`${API_PATHS.trending}`);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getMovieDetails = async (
  movie_id: string,
): Promise<AxiosResponse> => {
  try {
    return await customAxios(`${API_PATHS.details(movie_id)}`);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getSpecificDetails = async (
  movie_id: string,
  infoType: string,
): Promise<AxiosResponse> => {
  try {
    return await customAxios(`${API_PATHS.info(movie_id, infoType)}`);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getMovieCollection = async (
  collection_id: string,
): Promise<AxiosResponse> => {
  try {
    return await customAxios(`${API_PATHS.collection(collection_id)}`);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getPersonDetails = async (
  person_id: string,
): Promise<AxiosResponse> => {
  try {
    return await customAxios(`${API_PATHS.person(person_id)}`);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getPersons = async (page: string): Promise<AxiosResponse> => {
  try {
    return await customAxios(`${API_PATHS.persons(page)}`);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getPersonMovieCredits = async (
  person_id: string,
): Promise<AxiosResponse> => {
  try {
    return await customAxios(`${API_PATHS.personMovieCredits(person_id)}`);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getMoviesBasedOnGenre = async (
  page: string,
  genre: string,
): Promise<AxiosResponse> => {
  try {
    return await customAxios(`${API_PATHS.getDiscoveryWithGenre(page, genre)}`);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getMoviesTrailer = async (id: string): Promise<AxiosResponse> => {
  try {
    return await customAxios(`${API_PATHS.trailer(id)}`);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const searchResource = async (
  query: string,
  type: string,
  page: string,
): Promise<AxiosResponse> => {
  try {
    return await customAxios(`${API_PATHS.search(query, type, page)}`);
  } catch (e) {
    return Promise.reject(e);
  }
};
