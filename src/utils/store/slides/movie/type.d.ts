import { MovieData, MovieResponse } from "../../type";

interface Error {
  errors: string[];
  success: string;
}

interface MovieStateData {
  page: number;
  isLoading: boolean;
  results: MovieData[];
}

export interface MovieState {
  now_playing: MovieStateData;
  popular: MovieStateData;
  top_rated: MovieStateData;
  upcoming: MovieStateData;
  discovery: MovieStateData;
}

export interface MovieQuery {
  trend?: string;
  page: number;
}
