import { FC } from "react";
import { CategoryCardProps } from "../types";
import { Plus } from "../../Icon-components";
import Btn from "../../buttons";

const CategoryCard: FC<CategoryCardProps> = ({
  name,
  category,
  length,
  image,
}) => {
  return (
    <div className="relative h-[8.06rem] w-full md:w-[13.13rem] flex-shrink-0 overflow-hidden rounded-[0.5rem] bg-[linear-gradient(0deg,_rgba(22,_24,_30,_0.70)_0%,_rgba(22,_24,_30,_0.70)_100%)] flex justify-center items-center">
      <img
        src={image}
        alt={name}
        className="object-cover object-top w-full h-full"
      />
      <div className="absolute z-40 flex flex-col justify-between items-center p-[0.63rem] h-full w-full">
        <p className="text-[1rem] font-extrabold w-full text-left text-white">
          {name}
        </p>
        <div className="flex flex-col space-x-[1.31rem] items-start justify-start w-full">
          <div className="flex flex-row justify-between items-center w-full font-bold text-[0.88rem] text-primary">
            <p>{length} EP</p>
            <p>{category}</p>
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
