import { FC } from "react";
import Layout from "../layout/layout";
import NavBar from "../components/nav-bar-components";
import Slideshow from "../components/slideshow";
import CategoryComponent from "../components/category-component";
import CategoriesRightbarComponent from "../components/categories-rightbar-component";

const Home: FC = () => {
  return (
    <Layout>
      <div className="px-4 pb-24 lg:p-[4.25rem] lg:pt-[1.6rem] lg:pr-[2rem] flex flex-col justify-start w-full h-full">
        <NavBar />
        <div className="flex flex-row justify-start items-start w-full h-full">
          <div className="flex flex-col justify-start items-start w-full lg:w-[72.20%] h-full overflow-y-auto scrollbar-none pb-20 lg:pb-4">
            <Slideshow />
            <CategoryComponent title="Popular on Honey Movies" />
          </div>
          <div className="hidden lg:block font-lato w-[27.8%] pt-[2.94rem] h-full overflow-y-auto scrollbar-none pb-20 lg:pb-4">
            <CategoriesRightbarComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
