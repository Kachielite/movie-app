import React, { FC } from "react";
import Layout from "../layout/layout";
import CategorySkeleton from "../components/categories-rightbar-component/components/category-skeleton";
import GenreCard from "../components/categories-rightbar-component/components/genre-card";
import { useAppSelector } from "../utils/store/hooks";
import { RootState } from "../utils/store";
import { Genre } from "../utils/store/type";

const GenrePage: FC = () => {
  const { genre, isLoading } = useAppSelector(
    (state: RootState) => state.movie.genres,
  );

  return (
    <Layout>
      <div className="px-4 w-full h-full flex flex-col justify-start items-center">
        <h1 className="text-[2rem] font-extrabold text-left w-full text-primaryText font-lato capitalize">
          Genre
        </h1>
        <div className="flex flex-row flex-wrap w-full mt-2 font-lato justify-center md:justify-between h-full lg:pr-4 pb-36  scrollbar-none overflow-y-auto">
          {isLoading
            ? Array(16)
                .fill(true)
                .map((_, i) => (
                  <div className="mb-10 mr-10 w-full md:w-[13.13rem]">
                    <CategorySkeleton key={i} />
                  </div>
                ))
            : genre.map(({ id, name }: Genre) => (
                <div className="mb-10 w-full md:w-[13.13rem]">
                  <GenreCard key={id} name={name} id={id} />
                </div>
              ))}
        </div>
      </div>
    </Layout>
  );
};

export default GenrePage;
