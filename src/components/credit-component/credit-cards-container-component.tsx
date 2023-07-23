import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import CreditCard from "./credit-card";
import { Cast, Crew } from "../../utils/store/type";

interface Props {
  cast: Cast[];
  crew: Crew[];
  isLoading: boolean;
}

const CreditCardsContainerComponent: FC<Props> = ({
  cast,
  crew,
  isLoading,
}) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center space-y-7">
      <div className="w-screen lg:w-full flex flex-row lg:flex-wrap space-x-[1rem] overflow-x-auto">
        {isLoading
          ? Array(10)
              .fill(true)
              .map((_, i) => (
                <Skeleton
                  width="12.16rem"
                  height="26.06rem"
                  borderRadius="0.5rem"
                  baseColor="#22242D"
                  highlightColor="#9BA3AF"
                  key={i}
                />
              ))
          : cast.map(({ id, name, profile_path, character }: Cast) => (
              <CreditCard
                id={id}
                name={name}
                job={character}
                image={profile_path}
              />
            ))}
      </div>
    </div>
  );
};

export default CreditCardsContainerComponent;
