import { FC, useState } from "react";
import Layout from "../layout/layout";
import Slideshow from "../components/slideshow";
import CategoryComponent from "../components/category-component";
import VideoModal from "../components/videoModal";
import { useAppDispatch, useAppSelector } from "../utils/store/hooks";
import { RootState } from "../utils/store";
import { fetchMovieTrailer } from "../utils/store/slides/movie";

const Home: FC = () => {
  return (
    <Layout>
      <div className="relative flex flex-col justify-start items-start w-full h-full pb-12 overflow-y-scroll scrollbar-none">
        <Slideshow />
        <CategoryComponent title="Popular Movies" />
      </div>
    </Layout>
  );
};

export default Home;
