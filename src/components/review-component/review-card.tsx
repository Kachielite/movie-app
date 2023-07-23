import { FC, useState } from "react";
import RatingComponent from "../rating-component";
import moment from "moment";

const ReviewCard: FC<{
  name: string;
  date: string;
  rating: number;
  content: string;
  id: number;
}> = ({ name, date, rating, content, id }) => {
  const [index, setIndex] = useState<null | number>(null);
  const dateToLocal = new Date(date);

  const readMoreHandler = (move_id: number) => {
    if (move_id === index) {
      setIndex(null);
    } else {
      setIndex(move_id);
    }
  };

  return (
    <div
      className={`flex flex-col gap-4 bg-gray-700 p-4 font-lato w-full lg:w-[48%] ${
        index === id ? "h-fit" : "h-[14rem]"
      } rounded-[1.25rem] bg-secondary flex-shrink-0 mb-6`}
    >
      <div className="flex justify justify-between">
        <div className="flex gap-2">
          <div className="w-7 h-7 text-center rounded-full overflow-hidden bg-primary flex justify-center items-center">
            {<p className="text-black font-bold capitalize">{name[0]}</p>}
          </div>
          <span className="text-primaryText font-bold text-lg capitalize">
            {name}
          </span>
        </div>
        <div className="flex p-1 gap-1 text-orange-300">
          <RatingComponent rating={rating} />
        </div>
      </div>

      <div
        className={`text-primaryText ${
          index === id ? "h-fit" : "h-[14rem] overflow-hidden"
        } `}
      >
        {content}
      </div>

      <div className="flex justify-between">
        <span className="text-primary">
          {moment(dateToLocal).format("YYYY-MM-DD")}
        </span>
        {content.length > 320 && (
          <button
            className="p-1 px-2 outline-0 text-primary"
            onClick={() => readMoreHandler(id)}
          >
            {index === id ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
