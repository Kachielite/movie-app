import { useEffect, useState } from "react";
import { SliderControlActions } from "../types";
import { useAppSelector } from "../../../utils/store/hooks";
import { RootState } from "../../../utils/store";
const useSlider = () => {
  const { results: moviesData, isLoading } = useAppSelector(
    (state: RootState) => state.movie.trends.now_playing,
  );
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [slide, setSlide] = useState<string | undefined>(
    moviesData[slideIndex]?.backdrop_path,
  );
  const [caption, setCaption] = useState<string>(moviesData[slideIndex]?.title);

  const slideHandler: (action: SliderControlActions) => void = (action) => {
    if (action.direction) {
      if (action.direction === "backward") {
        if (slideIndex === 0) {
          setSlideIndex(7);
        }
        setSlideIndex((prevCount) => (prevCount - 1) % 7);
      } else {
        setSlideIndex((prevCount) => (prevCount + 1) % 7);
      }
    } else if (action.index) {
      setSlideIndex(action.index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevCount) => (prevCount + 1) % 7); // Increment count and reset to 0 when it reaches 6
    }, 7000); // Change this value to adjust the counting speed (1 second in this case)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSlide(moviesData[slideIndex]?.backdrop_path);
    setCaption(moviesData[slideIndex]?.title);
  }, [slideIndex]);

  return { slideIndex, slideHandler, slide, caption, isLoading };
};

export default useSlider;
