import { FC } from "react";
import Layout from "../layout/layout";
import NavBar from "../components/nav-bar-components";
import Slideshow from "../components/slideshow";
import PopularFeatureComponent from "../components/popular-feature-component";

const Home: FC = () => {
  return (
    <Layout>
      <div className="p-4 lg:p-[4.25rem] lg:pt-[2rem] lg:pr-[2rem] flex flex-col justify-start items-start w-full lg:w-[75%]">
        <NavBar />
        <Slideshow />
        <PopularFeatureComponent />
      </div>
    </Layout>
  );
};

export default Home;
