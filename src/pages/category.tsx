import { FC } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/layout";
import MovieCard from "../components/movie-card";

const Category: FC = () => {
  const { type } = useParams();

  return (
    <Layout>
      <h1 className="text-[2rem] font-extrabold text-left w-full text-primary font-lato capitalize px-4">
        {type}
      </h1>
      <MovieCard />
    </Layout>
  );
};

export default Category;
