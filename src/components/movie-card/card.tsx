import { FC } from "react";
import RatingComponent from "../rating-component";
import { BASE_IMAGE_URL } from "../../utils/services";
import { Link, useLocation } from "react-router-dom";
import moviePosterFallback from "../../assets/images/movie_poster.png";

interface Props {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

const Card: FC<Props> = ({
  id,
  title,
  release_date,
  overview,
  poster_path,
  vote_average,
}) => {
  const { pathname } = useLocation();

  const link = () => (pathname.includes("movie") ? "_self" : "_blank");

  return (
    <Link
      to={`/movie/${id}`}
      target={link()}
      rel="noopener noreferrer"
      className={`flex flex-col justify-start items-start flex-shrink-0 font-lato ${
        pathname.includes("movie") ? "w-[15.44rem]" : "w-full md:w-[15.44rem]"
      }  pb-10 px-2`}
    >
      <div className="relative w-full h-[26.06rem] rounded-t-[1.06rem] overflow-hidden">
        <img
          src={
            poster_path
              ? `${BASE_IMAGE_URL}${poster_path}`
              : moviePosterFallback
          }
          alt={title}
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute font-bold top-0 right-0 pt-[0.91rem] pr-[1.31rem] pl-[1.44rem] pb-[0.44rem] bg-primary text-[1.44rem] text-black font-normal rounded-tr-[1.06rem] rounded-bl-[1.06rem]">
          {parseFloat((parseFloat(String(vote_average)) / 2).toFixed(1))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start mt-[0.94rem]">
        <h1 className="text-[1.83rem] text-primaryText text-left w-full h-[5.49rem] overflow-hidden">
          {title}
        </h1>
        <div className="w-full flex flex-row justify-between items-center mt-[0.25rem]">
          <RatingComponent rating={vote_average} />
          <p className="text-[1.06rem] text-[rgba(249,_249,_249,_0.70)]">
            {release_date}
          </p>
        </div>
        <p className="text-[0.88rem] text-primaryText text-justify h-[2.5rem] overflow-hidden ">
          {overview?.substring(0, 100)}
        </p>
      </div>
    </Link>
  );
};

export default Card;
