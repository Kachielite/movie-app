import React, { FC, useEffect } from "react";
import Card from "./card";
import { MovieData, MovieDetails, TVData } from "../../utils/store/type";
import "react-loading-skeleton/dist/skeleton.css";
import useMovieCard from "./hooks/useMovieCard";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import {
  discoverMovies,
  setPage,
  setPageGenre,
} from "../../utils/store/slides/movie";
import { useAppDispatch, useAppSelector } from "../../utils/store/hooks";
import { useLocation, useParams } from "react-router-dom";
import { RootState } from "../../utils/store";

const Movie: FC<{ data: MovieData[] | MovieDetails[] }> = ({ data }) => {
  return data?.map(
    ({ title, release_date, overview, backdrop_path, vote_average, id }) => (
      <Card
        id={id as number}
        key={id}
        title={title as string}
        release_date={release_date as string}
        poster_path={backdrop_path as string}
        vote_average={vote_average as number}
        overview={overview as string}
      />
    ),
  );
};

const TV: FC<{ data: TVData[] }> = ({ data }) => {
  return data?.map(
    ({ name, first_air_date, overview, backdrop_path, vote_average, id }) => (
      <Card
        id={id}
        key={id}
        title={name}
        release_date={first_air_date}
        poster_path={backdrop_path}
        vote_average={vote_average}
        overview={overview}
      />
    ),
  );
};

const CardToRender: FC<{
  selection: string;
  data: MovieData[] | TVData[] | MovieDetails[];
}> = ({ selection, data }) => {
  if (selection === "movie") {
    return <Movie data={data as MovieData[] | MovieDetails[]} />;
  }
  return <TV data={data as TVData[]} />;
};

const MovieCard: FC<{
  movies: MovieData[] | MovieDetails[];
}> = ({ movies }) => {
  const { type } = useParams();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { trends } = useAppSelector((state: RootState) => state.movie);
  type TrendsKey = keyof typeof trends;
  const typeTrend = type as TrendsKey;

  const scrollHandler = () => {
    if (pathname.includes("watchlist")) {
      return null;
    }
    if (pathname.includes("genre")) {
      return dispatch(setPageGenre());
    } else {
      return dispatch(setPage(typeTrend));
    }
  };

  const scrollRef: React.LegacyRef<HTMLDivElement> | undefined =
    useBottomScrollListener(() => scrollHandler());
  const selection = "movie";

  return (
    <div
      className="flex flex-wrap mt-[1.12rem] justify-start  items-center w-full h-full px-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary"
      ref={scrollRef}
    >
      <div className="flex flex-wrap justify-center md:justify-evenly items-start h-full">
        <CardToRender data={movies} selection={selection} />
      </div>
    </div>
  );
};

export default MovieCard;
