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

interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface ProductionHouse {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Cast {
  adult?: boolean;
  gender?: number;
  id: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity?: string;
  profile_path: string;
  cast_id?: number;
  character: string;
  credit_id?: string;
  order: number;
}

export interface Crew {
  adult?: boolean;
  gender?: number;
  id: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity?: string;
  profile_path: string;
  cast_id?: number;
  credit_id?: number;
  department: string;
  job: string;
}

export interface CreditResponse {
  id?: string;
  cast?: Cast[];
  crew?: Crew[];
}

export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}

export interface Review {
  author?: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: number;
  updated_at?: Date;
  url?: string;
}

export interface ReviewResponse {
  id?: number;
  page?: number;
  results?: Review[];
  total_pages?: number;
  total_results?: number;
}

export interface MovieDetails {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: BelongsToCollection;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionHouse[];
  production_countries?: ProductionCountries[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguage[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
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

export interface MovieDetailsObj {
  details: MovieDetails;
  isLoading: boolean;
  credits: CreditResponse;
  reviews: ReviewResponse;
}

export interface MovieState {
  trends: TrendsObj;
  genres: GenreObj;
  details: MovieDetailsObj;
}

export interface MovieQuery {
  trend?: string;
  page: number;
}
