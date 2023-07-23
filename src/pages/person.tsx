import { FC, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Btn from "../components/buttons";
import { PreviousBtn } from "../components/Icon-components";
import FilmHouse from "../assets/images/producer-housing.png";
import { BASE_IMAGE_URL } from "../utils/services";
import { useAppDispatch, useAppSelector } from "../utils/store/hooks";
import { RootState } from "../utils/store";
import { RotatingLines } from "react-loader-spinner";
import {
  fetchPersonDetails,
  fetchPersonMovieCredits,
} from "../utils/store/slides/movie";
import SimilarMovieComponent from "../components/similar-movie-component";

const Person: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, details, credits } = useAppSelector(
    (state: RootState) => state.movie.person,
  );
  const { cast } = credits;

  useEffect(() => {
    if (id) {
      dispatch(fetchPersonDetails({ personId: id }));
      dispatch(fetchPersonMovieCredits({ personId: id }));
    }
  }, [id]);

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
          <div className="w-full h-full flex flex-col justify-start items-start  pt-4  bg-[linear-gradient(0deg,_rgba(22,_24,_30,_0.70)_0%,_rgba(22,_24,_30,_0.70)_100%)]">
            <div className="flex flex-row space-x-[1.31rem] items-center justify-center px-4 md:px-[3.12rem]">
              <Link to="/">
                <Btn type="arrow">
                  <PreviousBtn />
                </Btn>
              </Link>
              <p className="text-primaryText text-[1.75rem] font-extrabold">
                Back home
              </p>
            </div>
            <div className="flex flex-col-reverse md:flex-row-reverse justify-start items-center w-full lg:space-x-24 lg:h-full mt-4 lg:mt-0 px-4 md:px-[3.13rem] py-10">
              <div className="h-full w-full flex flex-col justify-center items-start space-y-[1.38rem] lg:ml-10">
                <h1 className="text-[2.4rem] lg:text-[4.25rem] text-primaryText font-extrabold lg:max-w-3xl">
                  {details?.name}
                </h1>
                <p className="text-[1.56rem] text-primaryText">
                  <span className="text-primary ">Date of birth</span>:{" "}
                  {details?.birthday}
                </p>
                <p className="text-[1.56rem] text-primaryText">
                  <span className="text-primary ">Place of birth</span>:{" "}
                  {details?.place_of_birth}
                </p>
                <p className="text-[1.56rem] text-primaryText">
                  <span className="text-primary ">Known for</span>:{" "}
                  {details?.known_for_department}
                </p>
                <p className="text-[1.56rem] text-primaryText">
                  <span className="text-primary">Also known as</span>:{" "}
                  {details?.also_known_as?.join(", ")}
                </p>
              </div>
              <div className="h-fit lg:h-[31.5rem] w-fit flex-shrink-0 rounded-[1.25rem] overflow-hidden rounded-[1.25rem] relative flex justify-center items-center mb-5 lg:mb-0">
                <img
                  src={`${BASE_IMAGE_URL}${details?.profile_path}`}
                  alt={details?.name}
                  className="h-full w-full object-contain"
                />
                {/*<div className="rounded-bl-[1.25rem] bg-primary h-[2.19rem] w-[10.56rem] absolute top-0 right-0 flex justify-center items-center">*/}
                {/*  <p className="text-[1.25rem] font-bold">Top rated</p>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
          <div className="px-4 py-10 px-4 md:px-[3.12rem]">
            <h1 className="text-[2.4rem]  text-primaryText font-extrabold mb-5">
              Biography
            </h1>
            <p className="text-[1.56rem] leading-[3rem] text-left  text-primaryText w-full">
              {details?.biography}
            </p>
          </div>
          {cast && (
            <div className="w-full">
              <SimilarMovieComponent movieData={cast} title="Movie Credits" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Person;
