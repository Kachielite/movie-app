export interface MovieData {
  adult?: boolean;
  original_title?: string;
  popularity?: number;
  release_date?: string;
  title: string;
  video?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  overview?: string;
  poster_path?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface TVData {
  first_air_date: string;
  name: string;
  origin_country?: string[];
  original_name?: string;
  popularity?: number;
  backdrop_path: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  vote_count?: number;
}
export interface MovieResponse {
  page: number;
  results: T<MovieData[] | TVData[]>;
  total_pages: number;
  total_results: number;
  dates?: string;
}

interface Error {
  errors: string[];
  success: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface GenreResponse {
  genres: Genre[];
}

interface MovieStateData {
  page: number;
  isLoading: boolean;
  results: MovieData[];
}

export interface TrendsObj {
  now_playing: MovieStateData;
  popular: MovieStateData;
  top_rated: MovieStateData;
  upcoming: MovieStateData;
  discovery: MovieStateData;
  trending: MovieStateData;
}

export interface GenreObj {
  genre: Genre[];
  isLoading: boolean;
}

export interface MovieState {
  trends: TrendsObj;
  genres: GenreObj;
}

export interface MovieQuery {
  trend?: string;
  page: number;
}
