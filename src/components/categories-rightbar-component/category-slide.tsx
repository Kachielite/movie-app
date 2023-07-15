import { FC } from "react";
import Controls from "./controls";
import CategoryCard from "./category-card";
import { CategoryCardProps, Genre } from "./types";
import GenreCard from "./genre-card";

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
        {type === "genre" &&
          genreData &&
          genreData.map((genre: Genre, index: number) => (
            <GenreCard key={index} genre={genre.genre} image={genre.image} />
          ))}
      </div>
    </div>
  );
};

export default CategorySlide;
