import { FC } from "react";
import Layout from "../layout/layout";
import NavBar from "../components/nav-bar-components";
import Slideshow from "../components/slideshow";
import CategoryComponent from "../components/category-component";

const Home: FC = () => {
  return (
    <Layout>
      <div className="px-4 pb-24 lg:p-[4.25rem] lg:pt-[2rem] lg:pr-[2rem] flex flex-col justify-start items-start w-full lg:w-[75%] h-full overflow-y-auto">
        <NavBar />
        <Slideshow />
        <CategoryComponent title="Popular on Honey Movies" />
      </div>
    </Layout>
  );
};

export default Home;
