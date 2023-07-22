import React, { FC } from "react";
import Btn from "../buttons";
import { Plus } from "../Icon-components";
import RatingComponent from "../rating-component";
import { MovieData } from "../../utils/store/type";
import { BASE_IMAGE_URL } from "../../utils/services";
import { useAppSelector } from "../../utils/store/hooks";
import { RootState } from "../../utils/store";

const Card: FC<MovieData> = ({
  title,
  poster_path,
  vote_average,
  vote_count,
  genre_ids,
}) => {
  const { genre } = useAppSelector((state: RootState) => state.movie.genres);

  const getGenre = (): string | undefined => {
    if (genre_ids) {
      return genre.filter((g) => g.id === genre_ids[0])[0]?.name as string;
    }
  };
  return (
    <div className="relative flex-shrink-0 w-[14.81rem] h-[18.63rem] flex flex-col justify-center items-center overflow-hidden rounded-[1.25rem] bg-[linear-gradient(180deg,_rgba(22,_24,_30,_0.00)_0%,_rgba(22,_24,_30,_0.70)_61.28%),_linear-gradient(0deg,_rgba(22,_24,_30,_0.40)_0%,_rgba(22,_24,_30,_0.40)_100%)]">
      <div className="w-full h-full">
        <img
          src={`${BASE_IMAGE_URL}${poster_path}`}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute z-40 flex flex-col justify-between items-start pt-[1.31rem] px-[0.62rem] pb-[0.62rem] w-full h-full text-white bg-[linear-gradient(0deg,_rgba(22,_24,_30,_0.50)_0%,_rgba(22,_24,_30,_0.50)_100%)]">
        <div className="px-[0.69rem] w-full text-left flex flex-col justify-start space-y-[0.75rem]">
          <h3 className="text-[1.5rem] font-extrabold">{title}</h3>
          <RatingComponent rating={vote_average as number} />
        </div>
        <div className="flex flex-col justify-start space-y-[0.88rem] w-full">
          <div className="flex flex-row justify-between items-center w-full text-[rgba(249,_249,_249,_0.90)] text-[1.13rem] font-bold">
            {vote_count && <p>{vote_count} votes</p>}
            <p>{getGenre()}</p>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <Btn type="arrow">
              <Plus />
            </Btn>
            <Btn type="third">More Info</Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
