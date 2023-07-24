import React, { FC, useEffect } from "react";
import Card from "./card";
import { MovieData, TVData } from "../../utils/store/type";
import "react-loading-skeleton/dist/skeleton.css";
import useMovieCard from "./hooks/useMovieCard";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { discoverMovies } from "../../utils/store/slides/movie";

const Movie: FC<{ data: MovieData[] }> = ({ data }) => {
  return data?.map(
    ({ title, release_date, overview, backdrop_path, vote_average, id }) => (
      <Card
        id={id as number}
        key={id}
        title={title}
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

const CardToRender: FC<{ selection: string; data: MovieData[] | TVData[] }> = ({
  selection,
  data,
}) => {
  if (selection === "movie") {
    return <Movie data={data as MovieData[]} />;
  }
  return <TV data={data as TVData[]} />;
};

const MovieCard: FC<{
  movies: MovieData[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ movies, setPage }) => {
  const scrollRef: React.LegacyRef<HTMLDivElement> | undefined =
    useBottomScrollListener(() => setPage((prevState) => prevState + 1));
  const selection = "movie";

  return (
    <div
      className="flex flex-wrap mt-[1.12rem] justify-start  items-center w-full h-full px-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary"
      ref={scrollRef}
    >
      <div className="flex flex-wrap justify-center md:justify-evenly lg:justify-between items-center">
        <CardToRender data={movies} selection={selection} />
      </div>
    </div>
  );
};

export default MovieCard;
