import { FC, useEffect } from "react";
import CardContainer from "./card-container";
import { CategoryProps } from "./types";
import { useAppDispatch } from "../../utils/store/hooks";
import { fetchMoviesTrend } from "../../utils/store/slides/movie";

const CategoryComponent: FC<CategoryProps> = ({ title }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMoviesTrend({ trend: "popular", page: 1 }));
  }, []);

  return (
    <div className="flex flex-col justify-start items-start mt-[1.75rem] space-y-[1rem] font-lato text-white w-full pl-4 pb-10">
      <h2 className="font-extrabold text-[1.88rem]">{title}</h2>
      <CardContainer />
    </div>
  );
};

export default CategoryComponent;
