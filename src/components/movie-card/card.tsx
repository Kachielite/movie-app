import { FC } from "react";
import RatingComponent from "../rating-component";
import { Movie } from "./types";

const Card: FC<Movie> = ({ name, date, description, image, rating }) => {
  return (
    <div className="flex flex-col justify-start items-start flex-shrink-0 font-lato w-full md:w-[18.44rem] pb-10 px-2">
      <div className="relative w-full h-[26.06rem] rounded-t-[1.06rem] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute top-0 right-0 pt-[0.91rem] pr-[1.31rem] pl-[1.44rem] pb-[0.44rem] bg-primary text-[1.44rem] text-black font-normal rounded-tr-[1.06rem] rounded-bl-[1.06rem]">
          {rating}
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start mt-[0.94rem]">
        <h1 className="text-[1.83rem] text-primaryText text-left w-full">
          {name}
        </h1>
        <div className="w-full flex flex-row justify-between items-center mt-[0.25rem]">
          <RatingComponent rating={rating} />
          <p className="text-[1.06rem] text-[rgba(249,_249,_249,_0.70)]">
            {date}
          </p>
        </div>
        <p className="text-[0.88rem] text-primaryText text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
