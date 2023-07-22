import React, { FC } from "react";
import Card from "./card";
import { useAppSelector } from "../../utils/store/hooks";
import { NextBtn } from "../Icon-components";
import { RootState } from "../../utils/store";
import { MovieData } from "../../utils/store/type";
import Skeleton from "react-loading-skeleton";

const SkeletonLoader: FC = () => {
  return (
    <Skeleton
      height="18.63rem"
      width="14.81rem"
      borderRadius="1.25rem"
      baseColor="#22242D"
      highlightColor="#9BA3AF"
    />
  );
};

const CardContainer: FC = () => {
  const { results, isLoading } = useAppSelector(
    (state: RootState) => state.movie.popular,
  );

  return (
    <div className="group relative w-screen lg:w-full h-full flex justify-center items-center ">
      <div className="absolute right-2.5 z-40 group-hover:scale-150 ease-in duration-300 hidden lg:flex justify-center items-center rounded-[0.25rem] space-x-[0.01rem] h-8 w-8 bg-black/[.3] p-3">
        <NextBtn />
      </div>
      <div className="flex flex-row justify-start items-center space-x-[1.88rem] py-4 w-full scroll-smooth scrollbar-corner-neutral-50 overflow-x-auto scrolling-touch  scroll-smooth scrollbar-none">
        {isLoading
          ? Array(10)
              .fill(true)
              .map((_, i) => <SkeletonLoader key={i} />)
          : results.map(
              ({
                id,
                title,
                vote_count,
                vote_average,
                poster_path,
              }: MovieData) => (
                <Card
                  key={id}
                  title={title}
                  vote_average={vote_average}
                  vote_count={vote_count}
                  poster_path={poster_path}
                />
              ),
            )}
      </div>
    </div>
  );
};

export default CardContainer;
