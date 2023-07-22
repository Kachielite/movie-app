import { FC } from "react";
import Layout from "../layout/layout";
import Slideshow from "../components/slideshow";
import CategoryComponent from "../components/category-component";

const Home: FC = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-start items-start w-full h-full pb-12 overflow-y-scroll scrollbar-none">
        <Slideshow />
        <CategoryComponent title="Popular Movies" />
      </div>
    </Layout>
  );
};

export default Home;
