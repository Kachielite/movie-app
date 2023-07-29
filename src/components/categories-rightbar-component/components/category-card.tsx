import { FC, useEffect } from "react";
import { CategoryCardProps } from "../types";
import { Plus } from "../../Icon-components";
import Btn from "../../buttons";
import { Genre, MovieData, MovieDetails } from "../../../utils/store/type";
import { BASE_IMAGE_URL } from "../../../utils/services";
import { useAppDispatch, useAppSelector } from "../../../utils/store/hooks";
import { RootState } from "../../../utils/store";
import { MdOutlineDeleteOutline } from "react-icons/md";
import {
  addToWatchlist,
  deleteFromWatchlist,
  fetchMovieTrailer,
  showVideoModal,
} from "../../../utils/store/slides/movie";

const CategoryCard: FC<{ movie: MovieData }> = ({ movie }) => {
  const dispatch = useAppDispatch();
  const { genres, watchlist } = useAppSelector(
    (state: RootState) => state.movie,
  );
  const { genre } = genres;
  const {
    title,
    backdrop_path: backdropPath,
    genre_ids: genreIds,
    vote_count: voteCount,
    id,
  } = movie;
  const watchlistCheck = (): boolean => {
    return !!watchlist.find((m: MovieData | MovieDetails) => m.id === id);
  };
  const getGenre = (): string | undefined => {
    if (genreIds) {
      return genre.filter((g) => g.id === genreIds[0])[0]?.name as string;
    }
  };

  const showModal = () => {
    if (id) {
      dispatch(fetchMovieTrailer({ id: id.toString() }));
      dispatch(showVideoModal());
    }
  };

  useEffect(() => {
    watchlistCheck();
  }, [watchlist]);

  return (
    <div className="relative h-[8.06rem] w-full md:w-[13.13rem] flex-shrink-0 overflow-hidden rounded-[0.5rem]  flex justify-center items-center">
      <img
        src={`${BASE_IMAGE_URL}${backdropPath}`}
        alt={title}
        className="object-cover object-top w-full h-full"
      />
      <div className="absolute z-40 flex flex-col justify-between items-center p-[0.63rem] h-full w-full bg-[linear-gradient(0deg,_rgba(22,_24,_30,_0.50)_0%,_rgba(22,_24,_30,_0.50)_100%)]">
        <p className="text-[1rem] font-extrabold w-full text-left text-white">
          {title.substring(0, 25)}
        </p>
        <div className="flex flex-col space-x-[1.31rem] items-start justify-start w-full ">
          <div className="flex flex-row justify-between items-center w-full font-bold text-[0.88rem] text-primary">
            <p>{voteCount} votes</p>
            <p>{getGenre()}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
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
            <Btn type="add" onClick={() => dispatch(addToWatchlist(movie))}>
              <Plus />
            </Btn>
          )}
          <Btn type="category" onClick={showModal}>
            Watch
          </Btn>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
