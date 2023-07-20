import React, { FC } from "react";
import { Movie } from "./types";
import Btn from "../buttons";
import { Plus } from "../Icon-components";
import RatingComponent from "../rating-component";

const Card: FC<Movie> = ({ name, rating, category, length, image }) => {
  return (
    <div className="relative flex-shrink-0 w-[14.81rem] h-[18.63rem] flex flex-col justify-center items-center overflow-hidden rounded-[1.25rem] bg-[linear-gradient(180deg,_rgba(22,_24,_30,_0.00)_0%,_rgba(22,_24,_30,_0.70)_61.28%),_linear-gradient(0deg,_rgba(22,_24,_30,_0.40)_0%,_rgba(22,_24,_30,_0.40)_100%)]">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute z-40 flex flex-col justify-between items-start pt-[1.31rem] px-[0.62rem] pb-[0.62rem] w-full h-full text-white">
        <div className="px-[0.69rem] w-full text-left flex flex-col justify-start space-y-[0.75rem]">
          <h3 className="text-[1.5rem] font-extrabold">{name}</h3>
          <RatingComponent rating={rating} />
        </div>
        <div className="flex flex-col justify-start space-y-[0.88rem] w-full">
          <div className="flex flex-row justify-between items-center w-full text-[rgba(249,_249,_249,_0.70)] text-[1.13rem] font-bold">
            <p>{length} EP</p>
            <p>{category}</p>
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
