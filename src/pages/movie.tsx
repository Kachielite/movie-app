import { FC, useEffect } from "react";
import Btn from "../components/buttons";
import { Plus, PreviousBtn } from "../components/Icon-components";
import RatingComponent from "../components/rating-component";
import MoviePoster from "../assets/images/bg.png";
import Poster from "../assets/images/bg2.png";
import FilmHouse from "../assets/images/producer-housing.png";
import CategoryComponent from "../components/category-component";
import { Link, Params, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/store/hooks";
import { fetchMovieDetails } from "../utils/store/slides/movie";
import { RootState } from "../utils/store";
import { BASE_IMAGE_URL } from "../utils/services";

const Movie: FC = () => {
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();
  const movieDetails = useAppSelector(
    (state: RootState) => state.movie.details.details,
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails({ id: id }));
    }
  }, []);

  return (
    <div className="w-full h-full  bg-black flex flex-col justify-start items-start font-lato">
      <div className="w-full h-[108rem] lg:h-full flex justify-start items-start relative">
        <img
          src={`${BASE_IMAGE_URL}${movieDetails.backdrop_path}`}
          alt="Movie Background"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute z-40 w-full h-full flex flex-col justify-start items-start px-4 md:px-[3.12rem] pt-4 md:pt-[3.75rem] bg-[linear-gradient(0deg,_rgba(22,_24,_30,_0.70)_0%,_rgba(22,_24,_30,_0.70)_100%)]">
          <div className="flex flex-row space-x-[1.31rem] items-center justify-center">
            <Link to="/">
              <Btn type="arrow">
                <PreviousBtn />
              </Btn>
            </Link>
            <p className="text-primaryText text-[1.75rem] font-extrabold">
              Back home
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full  lg:h-full mt-[2.37rem] px-2 md:px-[3.13rem]">
            <div className="h-full flex flex-col justify-start items-start space-y-[1.38rem]">
              <h1 className="text-[2.4rem] lg:text-[4.25rem] text-primaryText font-extrabold">
                {movieDetails?.title}
              </h1>
              <RatingComponent
                rating={movieDetails?.vote_average as number}
                size="double"
              />
              <p className="text-[1.56rem] text-primaryText font-bold">
                {movieDetails?.vote_count} votes
              </p>
              <img src={FilmHouse} alt="Producing House" />
              <p className="text-[1.3rem] md:text-[1.88rem] font-bold text-primaryText w-full md:w-[49.75rem]">
                {movieDetails?.overview}
              </p>
              <div className="flex flex-col md:flex-row  items-start md:items-center space-y-5 md:space-y-0 md:space-x-[2.85rem] justify-start w-full">
                <Btn type="cta2">
                  <div className="flex flex-row items-center space-x-[0.9rem] justify-center ">
                    <Plus />
                    <p>Watchlist</p>
                  </div>
                </Btn>
                <Btn type="cta">
                  <p className="lg:px-[0.65rem]">Watch now</p>
                </Btn>
              </div>
            </div>
            <div className="h-[31.5rem] w-fit flex-shrink-0 rounded-[1.25rem] overflow-hidden rounded-[1.25rem] relative flex justify-center items-center mb-10 md:mb-0">
              <img
                src={`${BASE_IMAGE_URL}${movieDetails?.poster_path}`}
                alt="movie"
                className="h-full w-full object-contain"
              />
              {/*<div className="rounded-bl-[1.25rem] bg-primary h-[2.19rem] w-[10.56rem] absolute top-0 right-0 flex justify-center items-center">*/}
              {/*  <p className="text-[1.25rem] font-bold">Top rated</p>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-full text-primaryText border-y-[0.063rem] border-[rgba(255, 255, 255, 0.1)]">
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between items-start lg:items-center py-[0.94rem] w-full font-bold px-4 md:px-[6.12rem] text-[1rem]">
          <p className="text-primary">
            Status:{" "}
            <span className="font-normal text-primaryText">
              {movieDetails?.status}
            </span>
          </p>
          <p className="text-primary">
            Released Date:{" "}
            <span className="font-normal text-primaryText">
              {movieDetails?.release_date}
            </span>
          </p>
          <p className="text-primary">
            Runtime:{" "}
            <span className="font-normal text-primaryText">
              {movieDetails?.runtime} mins
            </span>
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
