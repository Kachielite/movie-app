import { FC } from "react";
import Card from "./card";
import { useGetDiscoverListQuery } from "../../utils/store/services/movie";
import { useAppSelector } from "../../utils/store/hooks";
import Skeleton from "react-loading-skeleton";
import { MovieData, TVData } from "../../utils/store/type";

const SkeletonLoader: FC = () => {
  return (
    <div className="flex flex-col justify-start items-start flex-shrink-0 font-lato w-full md:w-[18.44rem] pb-10 px-2">
      <Skeleton height="26.06rem" width="100%" borderRadius="1.06rem" />
      <div className="w-full flex flex-col justify-start items-start mt-[0.94rem]">
        <Skeleton />
        <Skeleton />
        <Skeleton count={3} />
      </div>
    </div>
  );
};

const MovieCard: FC = () => {
  const selection = useAppSelector((state) => state.selection.value);
  const { data, error, isLoading } = useGetDiscoverListQuery(selection);

  const Movie: FC = () => {
    return data?.results.map(
      ({
        title,
        release_date,
        overview,
        backdrop_path,
        vote_average,
        id,
      }: MovieData) => (
        <Card
          key={id}
          title={title}
          release_date={release_date}
          poster_path={backdrop_path}
          vote_average={vote_average}
          overview={overview}
        />
      ),
    );
  };

  const TV: FC = () => {
    return data?.results.map(
      ({
        name,
        first_air_date,
        overview,
        backdrop_path,
        vote_average,
        id,
      }: TVData) => (
        <Card
          key={id}
          title={name}
          release_date={first_air_date}
          poster_path={backdrop_path}
          vote_average={vote_average}
          overview={overview}
        />
      ),
    );
  };

  const CardToRender: FC = () => {
    if (selection === "movie") {
      return <Movie />;
    }
    return <TV />;
  };

  return (
    <div className="flex flex-wrap mt-[1.12rem] justify-center md:justify-evenly lg:justify-between items-center w-full h-full px-4 overflow-y-scroll scrollbar-none pb-36">
      {isLoading ? (
        Array(10)
          .fill(true)
          .map((_, i) => <SkeletonLoader key={i} />)
      ) : (
        <CardToRender />
      )}
    </div>
  );
};

export default MovieCard;
