import { FC, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Layout from "../layout/layout";
import DropdownComponent from "../components/dropdown";
import { Funnel } from "../components/Icon-components";
import MovieCardComponent from "../components/movie-card";
import { useAppDispatch, useAppSelector } from "../utils/store/hooks";
import {
  discoverMovies,
  fetchMoviesTrend,
  fetchTrendingMovies,
  searchMovie,
} from "../utils/store/slides/movie";
import { RootState } from "../utils/store";

const Category: FC = () => {
  type TrendsKey = keyof typeof trends;
  const { type } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dispatch = useAppDispatch();
  const { trends, loadMore } = useAppSelector(
    (state: RootState) => state.movie,
  );
  const trendType = location.pathname.includes("search")
    ? ("search_results" as TrendsKey)
    : (type as TrendsKey);

  useEffect(() => {
    if (type === "discovery") {
      dispatch(discoverMovies({ page: trends[type].page }));
    }
    if (location.pathname.includes("search")) {
      dispatch(
        searchMovie({
          searchedPhrase: queryParams.get("query") as string,
          page: trends[trendType].page.toString(),
        }),
      );
    }
    if (type === "trending") {
      dispatch(fetchTrendingMovies());
    }
    if (
      type !== "discovery" &&
      type !== "trending" &&
      !location.pathname.includes("search")
    ) {
      dispatch(fetchMoviesTrend({ trend: type, page: trends[trendType].page }));
    }
  }, [type, trends[trendType].page, queryParams.get("query")]);

  return (
    <Layout>
      <div className="px-4 w-full flex flex-row justify-between items-center">
        <h1 className="text-[2rem] font-extrabold text-left w-full text-primaryText font-lato capitalize">
          {type?.replace("_", " ")}
        </h1>
        {/*<div className="flex flex-row justify-center items-center space-x-2 mr-7">*/}
        {/*  <Funnel />*/}
        {/*  <DropdownComponent />*/}
        {/*</div>*/}
      </div>
      <MovieCardComponent
        isLoading={loadMore}
        movies={trends[trendType]?.results}
      />
    </Layout>
  );
};

export default Category;
