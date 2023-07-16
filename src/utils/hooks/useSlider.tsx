import { useEffect, useState } from "react";
import { SliderControlActions } from "../../components/slideshow/types";

const slideImages = [
  {
    url: "https://source.unsplash.com/random/godofwar",
    caption: "Slide 1",
  },
  {
    url: "https://source.unsplash.com/random/spiderman",
    caption: "Slide 2",
  },
  {
    url: "https://source.unsplash.com/random/cinema",
    caption: "Slide 3",
  },
];

const useSlider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [slide, setSlide] = useState<string>(slideImages[slideIndex]?.url);
  const [caption, setCaption] = useState<string>(
    slideImages[slideIndex]?.caption,
  );

  const slideHandler: (action: SliderControlActions) => void = (action) => {
    if (action.direction) {
      if (action.direction === "backward") {
        if (slideIndex === 0) {
          setSlideIndex(2);
        } else {
          setSlideIndex(slideIndex - 1);
        }
      } else {
        if (slideIndex === 2) {
          setSlideIndex(0);
        } else {
          setSlideIndex(slideIndex + 1);
        }
      }
    } else if (action.index) {
      setSlideIndex(action.index);
    }

    console.log(action.index);
  };

  useEffect(() => {
    setSlide(slideImages[slideIndex]?.url);
    setCaption(slideImages[slideIndex]?.caption);
  }, [slideIndex]);

  return { slideIndex, slideHandler, slideImages, slide, caption };
};

export default useSlider;
