import { FC } from "react";
import Layout from "../layout/layout";
import NavBar from "../components/nav-bar-components";

const Home: FC = () => {
  return (
    <Layout>
      <div className="p-4 lg:p-[4.25rem] lg:pt-[4rem] lg:pr-[2rem] flex flex-col justify-start items-start">
        <NavBar />
      </div>
    </Layout>
  );
};

export default Home;
