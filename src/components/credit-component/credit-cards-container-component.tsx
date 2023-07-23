import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import CreditCard from "./credit-card";
import { Cast, Crew } from "../../utils/store/type";

interface Props {
  cast: Cast[];
  crew: Crew[];
}

const CreditCardsContainerComponent: FC<Props> = ({ cast, crew }) => {
  const isLoading = true;
  return (
    <div className="h-full w-full flex flex-col justify-start space-y-7">
      <div className="w-full overflow-x-auto scrollbar flex flex-row space-x-[1.65rem]">
        {isLoading
          ? Array(3)
              .fill(true)
              .map((_, i) => <Skeleton key={i} />)
          : cast.map(({ id, name, profile_path, character }: Cast) => (
              <CreditCard
                id={id}
                name={name}
                job={character}
                image={profile_path}
              />
            ))}
      </div>
      <div className="w-full overflow-x-auto scrollbar flex flex-row space-x-[1.65rem]">
        {isLoading
          ? Array(3)
              .fill(true)
              .map((_, i) => <Skeleton key={i} />)
          : crew.map(({ id, name, profile_path, job }: Crew) => (
              <CreditCard id={id} name={name} job={job} image={profile_path} />
            ))}
      </div>
    </div>
  );
};

export default CreditCardsContainerComponent;
