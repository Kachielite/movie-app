import { FC, useEffect } from "react";
import Slider from "./components/slider";
import useSlider from "./hooks/useSlider";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { fetchMoviesTrend } from "../../utils/store/slides/movie/movie";
import { useAppDispatch } from "../../utils/store/hooks";

const Slideshow: FC = () => {
  const { isLoading } = useSlider();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMoviesTrend({ trend: "now_playing", page: 1 }));
  }, []);
  return (
    <div className="px-4 w-full">
      {isLoading ? (
        <Skeleton
          height="21.88rem"
          width="100%"
          borderRadius="1.25rem"
          baseColor="#22242D"
          highlightColor="#9BA3AF"
        />
      ) : (
        <Slider />
      )}
    </div>
  );
};

export default Slideshow;
