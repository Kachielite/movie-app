import React, { FC, useState } from "react";
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
  const [limit, setLimit] = useState<number>(14);

  const loadMoreHandler = () => {
    if (limit === cast.length) {
      setLimit(14);
    } else {
      setLimit(cast.length);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-full space-x-1.5">
      <div className="h-full w-full flex flex-col justify-center items-center space-y-7">
        <div className="w-screen lg:w-full flex flex-row lg:flex-wrap justify-between overflow-x-auto">
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
            : cast
                .slice(0, limit)
                .map(({ id, name, profile_path, character }: Cast) => (
                  <CreditCard
                    id={id}
                    name={name}
                    job={character}
                    image={profile_path}
                  />
                ))}
        </div>
      </div>
      {cast.length > 14 && (
        <button
          className="p-1 px-2 outline-0 text-xl text-primary underline underline-offset-4 hidden lg:block"
          onClick={loadMoreHandler}
        >
          {limit !== 14 ? "See less cast" : "See all cast"}
        </button>
      )}
    </div>
  );
};

export default CreditCardsContainerComponent;
