import { FC } from "react";
import SimilarMovieCardsContainer from "./similar-movie-cards-container";
import { MovieData } from "../../utils/store/type";

const SimilarMovieComponent: FC<{ movieData: MovieData[]; title: string }> = ({
  movieData,
  title,
}) => {
  return (
    <div className="w-full  px-4 md:px-[5.12rem]">
      <h1 className="text-[2.4rem]  text-primaryText font-extrabold mb-5">
        {title}
      </h1>
      <SimilarMovieCardsContainer movieData={movieData} />
    </div>
  );
};

export default SimilarMovieComponent;
