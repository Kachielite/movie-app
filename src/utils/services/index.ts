import { customAxios } from "./customAxios";
import { AxiosResponse } from "axios";

type Movie = "movie";
type TV = "tv";

export const BASE_IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const API_PATHS = {
  getDiscoverList: (type: Movie | TV, page: number): string => {
    return `/discover/${type}?page=${page}`;
  },
  findResource: (id: number): string => {
    return `/find/${id}`;
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

  getAlternativeTitle: (movie_id: number): string => {
    return `/movie/${movie_id}/alternative_titles`;
  },
  getCredits: (movie_id: number): string => {
    return `/movie/${movie_id}/credits`;
  },
  getImages: (movie_id: number): string => {
    return `/movie/${movie_id}/images`;
  },
  getKeywords: (movie_id: number): string => {
    return `/movie/${movie_id}/keywords`;
  },
  getRecommendations: (movie_id: number): string => {
    return `/movie/${movie_id}/recommendations`;
  },
  getReviews: (movie_id: number): string => {
    return `/movie/${movie_id}/reviews`;
  },
  getSimilar: (movie_id: number): string => {
    return `/movie/${movie_id}/similar`;
  },
  getTranslations: (movie_id: number): string => {
    return `/movie/${movie_id}/translations`;
  },
  getVideos: (movie_id: number): string => {
    return `/movie/${movie_id}/videos`;
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
