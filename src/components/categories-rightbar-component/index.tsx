import { FC, useEffect } from "react";
import CategorySlide from "./components/category-slide";
import {
  fetchAllGenre,
  fetchMoviesTrend,
  fetchTrendingMovies,
} from "../../utils/store/slides/movie";
import { useAppDispatch, useAppSelector } from "../../utils/store/hooks";
import { RootState } from "../../utils/store";

const CategoriesRightBarComponent: FC = () => {
  const dispatch = useAppDispatch();
  const { genres, trends } = useAppSelector((state: RootState) => state.movie);

  const { genre, isLoading: genreLoading } = genres;
  const { results: upcomingData, isLoading: upcomingLoading } = trends.upcoming;
  const { results: trendingData, isLoading: trendingLoading } = trends.trending;

  useEffect(() => {
    dispatch(fetchAllGenre());
    dispatch(fetchMoviesTrend({ trend: "upcoming", page: 1 }));
    dispatch(fetchTrendingMovies());
  }, []);

  return (
    <div className="flex flex-col justify-start space-y-[3.75rem] items-center pl-[1.87rem] w-full h-full overflow-y-auto scrollbar-none pb-36">
      <CategorySlide
        movieData={trendingData}
        categoryTitle="Trending"
        type="movies"
        isLoading={trendingLoading as boolean}
      />
      <CategorySlide
        movieData={upcomingData}
        categoryTitle="Upcoming"
        type="movies"
        isLoading={upcomingLoading as boolean}
      />
      <CategorySlide
        categoryTitle="Genre"
        type="genre"
        genreData={genre}
        isLoading={genreLoading as boolean}
      />
    </div>
  );
};

export default CategoriesRightBarComponent;
