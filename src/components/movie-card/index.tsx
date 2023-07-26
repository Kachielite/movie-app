import React, { FC, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import MovieCard from "./movieCard";
import { useAppDispatch } from "../../utils/store/hooks";
import { discoverMovies } from "../../utils/store/slides/movie";
import useMovieCard from "./hooks/useMovieCard";
import { MovieData, MovieDetails } from "../../utils/store/type";

const SkeletonLoader: FC = () => {
  return (
    <SkeletonTheme baseColor="#22242D" highlightColor="#9BA3AF" width="100%">
      <div className="flex flex-col justify-start items-start flex-shrink-0 font-lato w-full md:w-[18.44rem] pb-10 px-2">
        <Skeleton height="26.06rem" width="18.44rem" borderRadius="1.25rem" />
        <p className="mt-2">
          <Skeleton count={3} width="18.44rem" />
        </p>
      </div>
    </SkeletonTheme>
  );
};

const MovieCardComponent: FC<{
  isLoading: boolean;
  movies: MovieData[] | MovieDetails[];
}> = ({ isLoading, movies }) => {
  return (
    <div className="h-full">
      {isLoading ? (
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
    </div>
  );
};

export default MovieCardComponent;
