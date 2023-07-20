export interface MovieData {
  adult?: boolean;
  original_title?: string;
  popularity?: number;
  release_date: string;
  title: string;
  video?: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  overview: string;
  poster_path: string;
  vote_average: number;
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
  pages: number;
  results: T<MovieData[] | TVData[]>;
  total_pages: number;
  total_results: number;
}
