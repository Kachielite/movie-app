import { FC } from "react";
import Layout from "../layout/layout";
import DropdownComponent from "../components/dropdown";
import { Funnel } from "../components/Icon-components";
import MovieCardComponent from "../components/movie-card";
import { useAppSelector } from "../utils/store/hooks";
import { RootState } from "../utils/store";

const WatchList: FC = () => {
  const { watchlist } = useAppSelector((state: RootState) => state.movie);

  return (
    <Layout>
      <div className="px-4 w-full flex flex-row justify-between items-center">
        <h1 className="text-[2rem] font-extrabold text-left w-full text-primaryText font-lato capitalize">
          Watchlist
        </h1>
        {/*<div className="flex flex-row justify-center items-center space-x-2 mr-7">*/}
        {/*  <Funnel />*/}
        {/*  <DropdownComponent />*/}
        {/*</div>*/}
      </div>
      <MovieCardComponent isLoading={false} movies={watchlist} />
    </Layout>
  );
};

export default WatchList;
