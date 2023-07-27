import React, { FC, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import MovieCard from "./movieCard";
import { useAppDispatch } from "../../utils/store/hooks";
import { discoverMovies } from "../../utils/store/slides/movie";
import useMovieCard from "./hooks/useMovieCard";
import { MovieData, MovieDetails } from "../../utils/store/type";
import { RotatingLines, ThreeDots } from "react-loader-spinner";

const SkeletonLoader: FC = () => {
  return (
    <SkeletonTheme baseColor="#22242D" highlightColor="#9BA3AF" width="100%">
      <div className="flex flex-col justify-start items-start flex-shrink-0 font-lato w-full md:w-[15.44rem] pb-10 px-2">
        <Skeleton height="26.06rem" width="15.44rem" borderRadius="1.25rem" />
        <p className="mt-2">
          <Skeleton count={3} width="15.44rem" />
        </p>
      </div>
    </SkeletonTheme>
  );
};

const MovieCardComponent: FC<{
  isLoading: boolean;
  movies: MovieData[] | MovieDetails[];
}> = ({ isLoading, movies }) => {
  const loading = true;
  return (
    <div className="h-full w-full flex flex-col justify-start">
      {movies.length === 0 && isLoading ? (
        <div className="flex flex-wrap justify-start md:justify-evenly lg:justify-between items-center w-full">
          {Array(21)
            .fill(true)
            .map((_, i) => (
              <SkeletonLoader key={i} />
            ))}
        </div>
      ) : (
        <MovieCard movies={movies} />
      )}
      {movies.length > 0 && isLoading && (
        <div className="flex flex-row justify-center items-center w-full pb-44 pt-10">
          <p className="text-primaryText font-semibold mr-5 font-lato">
            Loading more movies
          </p>
          <RotatingLines
            strokeColor="#F8B319"
            strokeWidth="2"
            animationDuration="0.75"
            width="50"
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default MovieCardComponent;
