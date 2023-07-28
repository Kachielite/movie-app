import { FC } from "react";
import Controls from "./controls";
import Display from "./display";
import useSlider from "../hooks/useSlider";

const Slider: FC = () => {
  const { slideHandler, slideIndex, slide, caption, moviesData } = useSlider();

  return (
    <div className="relative w-full h-[21.88rem] flex justify-center items-center">
      <Controls
        slideHandler={slideHandler}
        caption={caption}
        slideIndex={slideIndex}
        movie={moviesData[slideIndex]}
      />
      <Display slide={slide as string} />
    </div>
  );
};

export default Slider;
