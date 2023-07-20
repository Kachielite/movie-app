import { customAxios } from "./customAxios";
import { AxiosResponse } from "axios";

const ENDPOINT = process.env.REACT_TMDB_ENDPOINT;

type Movie = "movie";
type TV = "tv";

enum TrendType {
  "now playing" = "now_playing",
  popular = "popular",
  "top rated" = "top_rated",
  upcoming = "upcoming",
  trending = "trending",
}

const API_PATHS = {
  getDiscoverList: (type: Movie | TV): string => {
    return `/discover/${type}`;
  },
  findResource: (id: number): string => {
    return `/find/${id}`;
  },
  getGenres: (type: Movie | TV): string => {
    return `/genre/${type}/list`;
  },
  now_playing: `/movie/now_playing`,
  popular: `/movie/popular`,
  top_rated: `/movie/top_rated`,
  upcoming: `/movie/upcoming`,
  trending: `/trending/movie/day`,
  details: (movie_id: number): string => {
    return `/movie/${movie_id}`;
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

const fetchMovies = async (trend: TrendType): Promise<AxiosResponse> => {
  try {
    const response = await customAxios(`${ENDPOINT}${API_PATHS[trend]}`);
    return response.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
