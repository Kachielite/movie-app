import Btn from "../../buttons";
import { CircleBtn, NextBtn, Plus, PreviousBtn } from "../../Icon-components";
import { FC, useEffect } from "react";
import { SliderControlActions } from "../types";
import { useAppDispatch, useAppSelector } from "../../../utils/store/hooks";
import { RootState } from "../../../utils/store";
import { MovieData, MovieDetails } from "../../../utils/store/type";
import {
  addToWatchlist,
  deleteFromWatchlist,
} from "../../../utils/store/slides/movie";
import { MdOutlineDeleteOutline } from "react-icons/md";

interface Props {
  slideHandler: (action: SliderControlActions) => void;
  slideIndex: number;
  caption: string;
  movie: MovieData;
}

const Controls: FC<Props> = ({ slideIndex, slideHandler, caption, movie }) => {
  const dispatch = useAppDispatch();
  const { watchlist } = useAppSelector((state: RootState) => state.movie);

  const watchlistCheck = (): boolean => {
    return !!watchlist.find((m: MovieData | MovieDetails) => m.id === movie.id);
  };
  const currentSlide: (index: number) => string = (index) => {
    if (index === slideIndex) {
      return "#F8B319";
    } else {
      return "white";
    }
  };

  useEffect(() => {
    watchlistCheck();
  }, [watchlist]);

  return (
    <div className="absolute z-40 flex flex-col justify-between h-full w-full py-[1.31rem] px-2.5 lg:px-[1.25rem] rounded-[1.25rem] mt-[2.8rem] bg-black/[0.2]">
      <div className="h-[3.13rem] w-full lg:pl-[1.25rem]">
        <h1 className="text-center lg:text-left font-lato text-[2.5rem] lg:text-[3rem] font-extrabold text-white">
          {caption}
        </h1>
      </div>
      <div className="w-full flex flex-row justify-between">
        <Btn
          type="arrow"
          onClick={() => slideHandler({ direction: "backward" })}
        >
          <PreviousBtn />
        </Btn>
        <Btn
          type="arrow"
          onClick={() => slideHandler({ direction: "forward" })}
        >
          <NextBtn />
        </Btn>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        {watchlistCheck() ? (
          <Btn
            type="arrow"
            onClick={() => dispatch(deleteFromWatchlist(movie))}
          >
            <div className="flex flex-row items-center space-x-[0.9rem] justify-center ">
              <MdOutlineDeleteOutline color="white" size="2rem" />
            </div>
          </Btn>
        ) : (
          <Btn type="secondary" onClick={() => dispatch(addToWatchlist(movie))}>
            <div className="flex flex-row space-x-[0.94rem] justify-center items-center">
              <Plus />
              <p className="hidden lg:block">Watchlist</p>
            </div>
          </Btn>
        )}
        <div className="hidden bg-[rgba(249,_249,_249,_0.20)] px-[0.75rem] py-[0.5rem] lg:flex flex-row justify-between items-center space-x-[0.62rem] rounded-[0.31rem]">
          <button onClick={() => slideHandler({ index: 0 })}>
            <CircleBtn color={currentSlide(0)} />
          </button>
          <button onClick={() => slideHandler({ index: 1 })}>
            <CircleBtn color={currentSlide(1)} />
          </button>
          <button onClick={() => slideHandler({ index: 2 })}>
            <CircleBtn color={currentSlide(2)} />
          </button>
          <button onClick={() => slideHandler({ index: 3 })}>
            <CircleBtn color={currentSlide(3)} />
          </button>
          <button onClick={() => slideHandler({ index: 4 })}>
            <CircleBtn color={currentSlide(4)} />
          </button>
          <button onClick={() => slideHandler({ index: 5 })}>
            <CircleBtn color={currentSlide(5)} />
          </button>
          <button onClick={() => slideHandler({ index: 6 })}>
            <CircleBtn color={currentSlide(6)} />
          </button>
        </div>
        <Btn type="primary">Watch Now</Btn>
      </div>
    </div>
  );
};

export default Controls;
