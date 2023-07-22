import React, { FC } from "react";
import Controls from "./controls";
import CategoryCard from "./category-card";
import { CategoryCardProps } from "../types";
import GenreCard from "./genre-card";
import { useAppSelector } from "../../../utils/store/hooks";
import { RootState } from "../../../utils/store";
import { Genre } from "../../../utils/store/type";
import CategorySkeleton from "./category-skeleton";

interface Props {
  movieData?: CategoryCardProps[];
  genreData?: Genre[];
  categoryTitle: string;
  type: string;
}

const CategorySlide: FC<Props> = ({
  movieData,
  genreData,
  categoryTitle,
  type,
}) => {
  const { genre, isLoading: genreLoading } = useAppSelector(
    (state: RootState) => state.movie.genres,
  );

  return (
    <div className="flex flex-col justify-start space-y-[1.87rem] items-start w-full">
      <Controls title={categoryTitle} />
      <div className="w-full overflow-x-auto scrollbar flex flex-row space-x-[1.65rem]">
        {type === "movies" &&
          movieData &&
          movieData.map((movie: CategoryCardProps, index: number) => (
            <CategoryCard
              key={index}
              image={movie.image}
              name={movie.name}
              category={movie.category}
              length={movie.length}
            />
          ))}
        {type === "genre" && genreLoading
          ? Array(3)
              .fill(true)
              .map((_, i) => <CategorySkeleton key={i} />)
          : genre.map(({ id, name }: Genre) => (
              <GenreCard key={id} name={name} id={id} />
            ))}
      </div>
    </div>
  );
};

export default CategorySlide;
