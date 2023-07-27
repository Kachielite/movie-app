import { FC } from "react";
import { Genre } from "../../../utils/store/type";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../utils/store/hooks";
import { cleanupGenre } from "../../../utils/store/slides/movie";

const GenreCard: FC<Genre> = ({ id, name }) => {
  const dispatch = useAppDispatch();

  return (
    <Link
      to={`/genre/${id}`}
      className="relative h-[8.06rem] w-full md:w-[13.13rem] flex-shrink-0 overflow-hidden rounded-[0.5rem] flex-shrink-0  flex justify-center items-center"
      onClick={() => dispatch(cleanupGenre())}
    >
      <img
        src={`https://source.unsplash.com/random/?${name}`}
        alt={name}
        className="object-cover object-top h-full w-full"
      />
      <div className="absolute z-40 flex justify-center items-center h-full w-full bg-[linear-gradient(0deg,_rgba(22,_24,_30,_0.50)_0%,_rgba(22,_24,_30,_0.50)_100%)]">
        <p className="text-white text-[1.13rem] font-bold">{name}</p>
      </div>
    </Link>
  );
};

export default GenreCard;
