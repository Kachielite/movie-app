import React, { FC } from "react";
import Controls from "./controls";
import CategoryCard from "./category-card";
import GenreCard from "./genre-card";
import { Genre, MovieData } from "../../../utils/store/type";
import CategorySkeleton from "./category-skeleton";

interface Props {
  movieData?: MovieData[];
  genreData?: Genre[];
  categoryTitle: string;
  type: string;
  isLoading: boolean;
}

const CategorySlide: FC<Props> = ({
  movieData,
  genreData,
  categoryTitle,
  type,
  isLoading,
}) => {
  return (
    <div className="flex flex-col justify-start space-y-[1.87rem] items-start w-full">
      <Controls title={categoryTitle} />
      <div className="w-full overflow-x-auto scrolling-touch  scroll-smooth scrollbar-thin scrollbar-thumb-primary flex flex-row space-x-[1.65rem]">
        {type === "movies" && isLoading
          ? Array(3)
              .fill(true)
              .map((_, i) => <CategorySkeleton key={i} />)
          : movieData?.map((movie: MovieData) => (
              <CategoryCard movie={movie} />
            ))}
        {type === "genre" && isLoading
          ? Array(3)
              .fill(true)
              .map((_, i) => <CategorySkeleton key={i} />)
          : genreData?.map(({ id, name }: Genre) => (
              <GenreCard key={id} name={name} id={id} />
            ))}
      </div>
    </div>
  );
};

export default CategorySlide;
