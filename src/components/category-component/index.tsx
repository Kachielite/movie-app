import { FC } from "react";
import CardContainer from "./card-container";
import { CategoryProps } from "./types";

const CategoryComponent: FC<CategoryProps> = ({ title }) => {
  return (
    <div className="flex flex-col justify-start items-start mt-[2.75rem] space-y-[1rem] font-lato text-white w-full px-4 pb-36">
      <h2 className="font-extrabold text-[1.88rem]">{title}</h2>
      <CardContainer />
    </div>
  );
};

export default CategoryComponent;
