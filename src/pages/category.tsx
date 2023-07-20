import { FC } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/layout";
import MovieCard from "../components/movie-card";
import DropdownComponent from "../components/dropdown";
import { Funnel } from "../components/Icon-components";

const Category: FC = () => {
  const { type } = useParams();

  return (
    <Layout>
      <div className="px-4 w-full flex flex-row justify-between items-center">
        <h1 className="text-[2rem] font-extrabold text-left w-full text-primaryText font-lato capitalize">
          {type}
        </h1>
        <div className="flex flex-row justify-center items-center space-x-2 mr-7">
          <Funnel />
          <DropdownComponent />
        </div>
      </div>
      <MovieCard />
    </Layout>
  );
};

export default Category;
