import { FC } from "react";
import { MovieData } from "../../utils/store/type";
import Card from "../movie-card/card";

const SimilarMovieCardsContainer: FC<{ movieData: MovieData[] }> = ({
  movieData,
}) => {
  return (
    <div className="w-full flex flex-row justify-start items-center overflow-x-auto scrollbar-thin scrollbar-thumb-primary">
      {movieData.map(
        ({
          id,
          title,
          release_date,
          overview,
          poster_path,
          vote_average,
        }: MovieData) => (
          <Card
            id={id as number}
            title={title}
            release_date={release_date as string}
            overview={overview as string}
            poster_path={poster_path as string}
            vote_average={vote_average as number}
          />
        ),
      )}
    </div>
  );
};
export default SimilarMovieCardsContainer;
