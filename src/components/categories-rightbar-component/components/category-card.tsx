import { FC } from "react";
import { CategoryCardProps } from "../types";
import { Plus } from "../../Icon-components";
import Btn from "../../buttons";
import { Genre, MovieData } from "../../../utils/store/type";
import { BASE_IMAGE_URL } from "../../../utils/services";
import { useAppSelector } from "../../../utils/store/hooks";
import { RootState } from "../../../utils/store";

const CategoryCard: FC<MovieData> = ({
  title,
  genre_ids,
  vote_count,
  backdrop_path,
}) => {
  const { genre } = useAppSelector((state: RootState) => state.movie.genres);

  const getGenre = (): string | undefined => {
    if (genre_ids) {
      return genre.filter((g) => g.id === genre_ids[0])[0]?.name as string;
    }
  };

  return (
    <div className="relative h-[8.06rem] w-full md:w-[13.13rem] flex-shrink-0 overflow-hidden rounded-[0.5rem]  flex justify-center items-center">
      <img
        src={`${BASE_IMAGE_URL}${backdrop_path}`}
        alt={title}
        className="object-cover object-top w-full h-full"
      />
      <div className="absolute z-40 flex flex-col justify-between items-center p-[0.63rem] h-full w-full bg-[linear-gradient(0deg,_rgba(22,_24,_30,_0.50)_0%,_rgba(22,_24,_30,_0.50)_100%)]">
        <p className="text-[1rem] font-extrabold w-full text-left text-white">
          {title.substring(0, 25)}
        </p>
        <div className="flex flex-col space-x-[1.31rem] items-start justify-start w-full ">
          <div className="flex flex-row justify-between items-center w-full font-bold text-[0.88rem] text-primary">
            <p>{vote_count} votes</p>
            <p>{getGenre()}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <Btn type="add">
            <Plus />
          </Btn>
          <Btn type="category">Watch</Btn>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
