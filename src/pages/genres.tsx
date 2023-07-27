import { FC, useEffect } from "react";
import Layout from "../layout/layout";
import { Funnel } from "../components/Icon-components";
import DropdownComponent from "../components/dropdown";
import MovieCardComponent from "../components/movie-card";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/store/hooks";
import { RootState } from "../utils/store";
import { fetchMoviesBasedOnGenre } from "../utils/store/slides/movie";
import { Genre } from "../utils/store/type";

const GenresPage: FC = () => {
  const dispatch = useAppDispatch();
  const { type } = useParams();
  const TrendType = type as string;
  const { genre, movieBasedGenre } = useAppSelector(
    (state: RootState) => state.movie.genres,
  );
  const { page, results, isLoading } = movieBasedGenre;

  useEffect(() => {
    dispatch(
      fetchMoviesBasedOnGenre({ page: page.toString(), genre: TrendType }),
    );
  }, [page]);

  return (
    <Layout>
      <div className="px-4 w-full flex flex-row justify-between items-center">
        <h1 className="text-[2rem] font-extrabold text-left w-full text-primaryText font-lato capitalize">
          {genre.filter((m: Genre) => m.id === parseInt(TrendType))[0]?.name}
        </h1>
        <div className="flex flex-row justify-center items-center space-x-2 mr-7">
          <Funnel />
          <DropdownComponent />
        </div>
      </div>
      <MovieCardComponent isLoading={isLoading as boolean} movies={results} />
    </Layout>
  );
};

export default GenresPage;
