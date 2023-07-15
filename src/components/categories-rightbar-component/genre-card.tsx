import { FC } from "react";
import { Genre } from "./types";

const GenreCard: FC<Genre> = ({ genre, image }) => {
  return (
    <div className="relative h-[8.06rem] w-[13.13rem] flex-shrink-0 overflow-hidden rounded-[0.5rem] bg-[linear-gradient(0deg,_rgba(22,_24,_30,_0.70)_0%,_rgba(22,_24,_30,_0.70)_100%)] flex justify-center items-center">
      <img
        src={image}
        alt={genre}
        className="object-cover object-top h-full w-full"
      />
      <div className="absolute z-40 flex justify-center items-center h-full w-full">
        <p className="text-white text-[1.13rem] font-bold">{genre}</p>
      </div>
    </div>
  );
};

export default GenreCard;
