import React, { FC, useEffect } from "react";
import Btn from "../buttons";
import { Plus } from "../Icon-components";
import RatingComponent from "../rating-component";
import { MovieData, MovieDetails } from "../../utils/store/type";
import { BASE_IMAGE_URL } from "../../utils/services";
import { useAppDispatch, useAppSelector } from "../../utils/store/hooks";
import { RootState } from "../../utils/store";
import { Link } from "react-router-dom";
import {
  addToWatchlist,
  deleteFromWatchlist,
} from "../../utils/store/slides/movie";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Card: FC<{ movie: MovieData }> = ({ movie }) => {
  const {
    title,
    poster_path: posterPath,
    vote_average: voteAverage,
    vote_count: voteCount,
    genre_ids: genreIds,
    id,
  } = movie;
  const dispatch = useAppDispatch();
  const { genres, watchlist } = useAppSelector(
    (state: RootState) => state.movie,
  );
  const { genre } = genres;
  const watchlistCheck = (): boolean => {
    return !!watchlist.find((m: MovieData | MovieDetails) => m.id === id);
  };

  const getGenre = (): string | undefined => {
    if (genreIds) {
      return genre.filter((g) => g.id === genreIds[0])[0]?.name as string;
    }
  };

  useEffect(() => {
    watchlistCheck();
  }, [watchlist]);

  return (
    <div className="relative flex-shrink-0 w-[14.81rem] h-[18.63rem] flex flex-col justify-center items-center overflow-hidden rounded-[1.25rem] bg-[linear-gradient(180deg,_rgba(22,_24,_30,_0.00)_0%,_rgba(22,_24,_30,_0.70)_61.28%),_linear-gradient(0deg,_rgba(22,_24,_30,_0.40)_0%,_rgba(22,_24,_30,_0.40)_100%)]">
      <div className="w-full h-full">
        <img
          src={`${BASE_IMAGE_URL}${posterPath}`}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute z-40 flex flex-col justify-between items-start pt-[1.31rem] px-[0.62rem] pb-[0.62rem] w-full h-full text-white bg-[linear-gradient(0deg,_rgba(22,_24,_30,_0.50)_0%,_rgba(22,_24,_30,_0.50)_100%)]">
        <div className="px-[0.69rem] w-full text-left flex flex-col justify-start space-y-[0.75rem]">
          <h3 className="text-[1.5rem] font-extrabold">{title}</h3>
          <RatingComponent rating={voteAverage as number} />
        </div>
        <div className="flex flex-col justify-start space-y-[0.88rem] w-full">
          <div className="flex flex-row justify-between items-center w-full text-[rgba(249,_249,_249,_0.90)] text-[1.13rem] font-bold">
            {voteCount && <p>{voteCount} votes</p>}
            <p>{getGenre()}</p>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            {watchlistCheck() ? (
              <Btn
                type="add"
                onClick={() => dispatch(deleteFromWatchlist(movie))}
              >
                <MdOutlineDeleteOutline
                  color="white"
                  size="2rem"
                  title="Remove from Watchlist"
                />
              </Btn>
            ) : (
              <Btn type="arrow" onClick={() => dispatch(addToWatchlist(movie))}>
                <Plus />
              </Btn>
            )}
            <Btn type="third">
              <Link to={`/movie/${id}`}>More Info</Link>
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
