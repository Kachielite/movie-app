import { FC } from "react";
import Btn from "../components/buttons";
import { Plus, PreviousBtn } from "../components/Icon-components";
import RatingComponent from "../components/rating-component";
import MoviePoster from "../assets/images/bg.png";
import Poster from "../assets/images/bg2.png";
import FilmHouse from "../assets/images/producer-housing.png";
import CategoryComponent from "../components/category-component";

const Movie: FC = () => {
  return (
    <div className="w-full h-full  bg-black flex flex-col justify-start items-start font-lato">
      <div className="w-full h-[98rem] md:h-[55rem] flex justify-start items-start relative">
        <img
          src={MoviePoster}
          alt="Movie Background"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute z-40 w-full h-full flex flex-col justify-start items-start px-4 md:px-[3.12rem] pt-4 md:pt-[4.75rem]">
          <div className="flex flex-row space-x-[1.31rem] items-center justify-center">
            <Btn type="arrow">
              <PreviousBtn />
            </Btn>
            <p className="text-primaryText text-[1.75rem] font-extrabold">
              Back home
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full mt-[4.37rem] px-4 md:px-[3.13rem]">
            <div className="h-full flex flex-col justify-start items-start space-y-[1.38rem]">
              <h1 className="text-[4.25rem] text-primaryText font-extrabold">
                Loki
              </h1>
              <RatingComponent rating={4.5} size="double" />
              <p className="text-[1.56rem] text-primaryText font-bold">
                10M+ views
              </p>
              <img src={FilmHouse} alt="Producing House" />
              <p className="text-[1.4rem] md:text-[1.88rem] font-bold text-primaryText w-full md:w-[40.75rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-5 md:space-y-0 md:space-x-[2.85rem] justify-start md:justify-center">
                <Btn type="secondary">
                  <div className="flex flex-row items-center space-x-[0.9rem] justify-center ">
                    <Plus />
                    <p>Watchlist</p>
                  </div>
                </Btn>
                <Btn type="primary">
                  <p className="px-[0.65rem]">Watch now</p>
                </Btn>
              </div>
            </div>
            <div className="h-[31.5rem] w-full md:w-[28.25rem] flex-shrink-0 rounded-[1.25rem] overflow-hidden relative flex justify-center items-center mb-10 md:mb-0">
              <img
                src={Poster}
                alt="movie"
                className="h-full w-full object-cover"
              />
              <div className="rounded-bl-[1.25rem] bg-primary h-[2.19rem] w-[10.56rem] absolute top-0 right-0 flex justify-center items-center">
                <p className="text-[1.25rem] font-bold">Top rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-full text-primaryText border-y-[0.063rem] border-[rgba(255, 255, 255, 0.1)]">
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between items-start lg:items-center py-[0.94rem] w-full font-bold px-4 md:px-[6.12rem] text-[1rem]">
          <p className="text-primary">
            Status:{" "}
            <span className="font-normal text-primaryText">Released</span>
          </p>
          <p className="text-primary">
            Released Date:{" "}
            <span className="font-normal text-primaryText">Jul 8, 2023</span>
          </p>
          <p className="text-primary">
            Runtime:{" "}
            <span className="font-normal text-primaryText">2h 44m</span>
          </p>
          <p className="text-primary">
            Director:{" "}
            <span className="font-normal text-primaryText">
              Christopher McQuarrie
            </span>
          </p>
          <p className="text-primary">
            Writer:{" "}
            <span className="font-normal text-primaryText">
              Christopher McQuarrie, Erik Jendresen
            </span>
          </p>
        </div>
      </div>
      <div className="py-10 px-4 md:px-[5.12rem]">
        <CategoryComponent title="Similar Movies" />
      </div>
    </div>
  );
};

export default Movie;