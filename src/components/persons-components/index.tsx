import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { PopularPersons } from "../../utils/store/type";
import PersonsCardContainer from "./persons-card-container";

const PersonsComponents: FC<{
  isLoading: boolean;
  persons: PopularPersons[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}> = ({ isLoading, persons, setPage, page }) => {
  return (
    <div className="h-full w-full">
      {isLoading ? (
        <div className="flex flex-wrap justify-center md:justify-evenly lg:justify-between items-center w-full font-lato">
          {Array(20)
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
            ))}
        </div>
      ) : (
        <PersonsCardContainer persons={persons} setPage={setPage} page={page} />
      )}
    </div>
  );
};

export default PersonsComponents;
