import { FC, useState } from "react";
import { Review } from "../../utils/store/type";
import ReviewCard from "./review-card";

const ReviewCardsContainerComponents: FC<{ reviews: Review[] }> = ({
  reviews,
}) => {
  const [limit, setLimit] = useState<number>(4);

  const loadMoreHandler = () => {
    if (limit === reviews.length) {
      setLimit(4);
    } else {
      setLimit(reviews.length);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-full space-x-2">
      <div className="flex flex-row flex-wrap w-full justify-between ">
        {reviews
          .map(({ author_details, created_at, content, id }: Review) => (
            <ReviewCard
              key={id}
              name={author_details?.username}
              id={id}
              date={created_at}
              rating={author_details.rating}
              content={content}
            />
          ))
          .slice(0, limit)
          .reverse()}
      </div>
      {reviews.length > 4 && (
        <button
          className="p-1 px-2 outline-0 text-lg text-primary"
          onClick={loadMoreHandler}
        >
          {limit !== 4 ? "See less reviews" : "See all reviews"}
        </button>
      )}
    </div>
  );
};

export default ReviewCardsContainerComponents;
