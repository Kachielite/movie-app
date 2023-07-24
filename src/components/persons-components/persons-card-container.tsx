import React, { FC } from "react";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { PopularPersons } from "../../utils/store/type";
import CreditCard from "../credit-component/credit-card";

const PersonsCardContainer: FC<{
  persons: PopularPersons[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}> = ({ persons, setPage, page }) => {
  const scrollRef: React.LegacyRef<HTMLDivElement> | undefined =
    useBottomScrollListener(() => setPage(page + 1));

  return (
    <div
      className="flex flex-wrap space-x-2 mt-[1.12rem] justify-start  items-center w-full h-full px-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary font-lato"
      ref={scrollRef}
    >
      {persons.map(
        ({ id, name, known_for_department, profile_path }: PopularPersons) => (
          <CreditCard
            id={id?.toString() as string}
            name={name as string}
            job={known_for_department as string}
            image={profile_path as string}
          />
        ),
      )}
    </div>
  );
};

export default PersonsCardContainer;
