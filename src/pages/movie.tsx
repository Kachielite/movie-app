import { FC, useEffect } from "react";
import Btn from "../components/buttons";
import { Plus, PreviousBtn } from "../components/Icon-components";
import RatingComponent from "../components/rating-component";
import FilmHouse from "../assets/images/producer-housing.png";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/store/hooks";
import {
  fetchMovieCollection,
  fetchMovieDetails,
  fetchSpecificDetails,
} from "../utils/store/slides/movie";
import { RootState } from "../utils/store";
import { BASE_IMAGE_URL } from "../utils/services";
import CreditComponent from "../components/credit-component";
import { RotatingLines } from "react-loader-spinner";
import { Crew } from "../utils/store/type";
import ReviewComponent from "../components/review-component";
import SimilarMovieComponent from "../components/similar-movie-component";

const Movie: FC = () => {
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();
  const {
    isLoading,
    credits,
    reviews,
    details: movieDetails,
    similar,
    collection,
  } = useAppSelector((state: RootState) => state.movie.details);
  const { crew, cast } = credits;
  const { results: reviewData } = reviews;
  const { results: similarMoviesData } = similar;
  const { parts, name: collectionName } = collection;
  const collectionId = movieDetails?.belongs_to_collection?.id as string;
  const director = (): Crew[] =>
    crew?.filter((c) => c.job === "Director") as Array<Crew>;
  const writer = (): Crew[] =>
    crew?.filter((c) => c.job === "Writer") as Array<Crew>;

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails({ id: id }));
      dispatch(fetchSpecificDetails({ id: id, infoType: "credits" }));
      dispatch(fetchSpecificDetails({ id: id, infoType: "reviews" }));
      dispatch(fetchSpecificDetails({ id: id, infoType: "similar" }));
    }
  }, [id]);

  useEffect(() => {
    if (collectionId) {
      dispatch(fetchMovieCollection({ collection_id: collectionId }));
    }
  }, [collectionId]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {isLoading ? (
        <RotatingLines
          strokeColor="#F8B319"
          strokeWidth="5"
          animationDuration="0.75"
          width="200"
          visible={true}
        />
      ) : (
        <div className="w-screen h-full  bg-black flex flex-col justify-start items-start font-lato">
          <div
            className={`w-full ${
              movieDetails?.overview && movieDetails?.overview?.length < 230
                ? "h-[87rem]"
                : movieDetails?.overview &&
                  (movieDetails?.overview?.length > 231 ||
                    movieDetails?.overview?.length > 350)
                ? "h-[98rem]"
                : "h-[108rem]"
            } lg:h-full flex justify-start items-start relative`}
          >
            <img
              src={`${BASE_IMAGE_URL}${movieDetails.backdrop_path}`}
              alt="Movie Background"
              className={`${
                movieDetails.backdrop_path ? "h-full" : "h-[54rem]"
              } w-full object-cover object-top`}
            />
            <div className="absolute z-40 w-full h-full flex flex-col justify-start items-start px-4 md:px-[3.12rem] pt-4  bg-[linear-gradient(0deg,_rgba(22,_24,_30,_0.70)_0%,_rgba(22,_24,_30,_0.70)_100%)]">
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
              <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full  lg:h-full mt-4 lg:mt-0 px-2 md:px-[3.13rem]">
                <div className="h-full flex flex-col justify-center items-start space-y-[1.38rem]">
                  <h1 className="text-[2.4rem] lg:text-[4.25rem] text-primaryText font-extrabold lg:max-w-3xl">
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
                  <p className="text-[1.3rem] md:text-[1.88rem] text-justify lg:text-left font-bold text-primaryText w-full md:w-[54.75rem]">
                    {movieDetails?.overview}
                  </p>
                  <div className="flex flex-col md:flex-row  items-start md:items-center space-y-7 md:space-y-0 md:space-x-[2.85rem] justify-start w-full">
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
                <div className="h-[31.5rem] lg:h-[45.5rem] w-fit flex-shrink-0 rounded-[1.25rem] overflow-hidden rounded-[1.25rem] relative flex justify-center items-center ">
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
            <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between lg:justify-start items-start lg:items-center py-[0.94rem] w-full font-bold px-4 md:px-[6.12rem] text-[1rem]">
              <p className="text-primary lg:mr-2">
                Status:{" "}
                <span className="font-normal text-primaryText">
                  {movieDetails?.status}
                </span>
              </p>
              <p className="text-primary lg:mr-2">
                Released Date:{" "}
                <span className="font-normal text-primaryText">
                  {movieDetails?.release_date}
                </span>
              </p>
              <p className="text-primary lg:mr-2">
                Runtime:{" "}
                <span className="font-normal text-primaryText">
                  {movieDetails?.runtime} mins
                </span>
              </p>
              <p className="text-primary lg:mr-2">
                Director:{" "}
                <span className="font-normal text-primaryText">
                  {director()
                    ?.map((d) => d.name)
                    .join(", ")}
                </span>
              </p>
              {writer()?.length !== 0 && (
                <p className="text-primary lg:mr-2">
                  Writer:{" "}
                  <span className="font-normal text-primaryText">
                    {writer()
                      ?.map((d) => d.name)
                      .join(", ")}
                  </span>
                </p>
              )}
              <p className="text-primary lg:mr-2">
                Spoken language:{" "}
                <span className="font-normal text-primaryText">
                  {movieDetails?.spoken_languages
                    ?.map((language) => language.name)
                    .join(", ")}
                </span>
              </p>
              <p className="text-primary lg:mr-2">
                Genres:{" "}
                <span className="font-normal text-primaryText">
                  {movieDetails?.genres?.map((genre) => genre.name).join(", ")}
                </span>
              </p>
              <p className="text-primary lg:mr-2">
                Original title:{" "}
                <span className="font-normal text-primaryText">
                  {movieDetails?.title}
                </span>
              </p>
              <p className="text-primary lg:mr-2">
                Production Companies:{" "}
                <span className="font-normal text-primaryText">
                  {movieDetails?.production_companies
                    ?.map((company) => company.name)
                    .join(", ")}
                </span>
              </p>
              <p className="text-primary lg:mr-2">
                Production Countries:{" "}
                <span className="font-normal text-primaryText">
                  {movieDetails?.production_countries
                    ?.map((country) => country.name)
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
          {cast && crew && (
            <CreditComponent cast={cast} crew={crew} isLoading={isLoading} />
          )}
          <div className="w-full">
            {parts && collectionName && (
              <SimilarMovieComponent movieData={parts} title={collectionName} />
            )}
          </div>
          {reviewData && reviewData?.length > 0 && (
            <ReviewComponent results={reviewData} />
          )}
          <div className="w-full">
            <SimilarMovieComponent
              movieData={similarMoviesData}
              title="Similar Movies"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
