import { useAppDispatch, useAppSelector } from "../../../utils/store/hooks";
import { RootState } from "../../../utils/store";
import {
  discoverMovies,
  setPage,
} from "../../../utils/store/slides/movie/movie";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import React, { useEffect, useState } from "react";

const useMovieCard = () => {
  const dispatch = useAppDispatch();
  const {
    results: movies,
    isLoading,
    page,
  } = useAppSelector((state: RootState) => state.movie.discovery);
  const scrollRef: React.LegacyRef<HTMLDivElement> | undefined =
    useBottomScrollListener(() => dispatch(discoverMovies({ page: page + 1 })));

  return { movies, isLoading, scrollRef, page };
};

export default useMovieCard;
