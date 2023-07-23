import { FC } from "react";
import ReviewCardsContainerComponents from "./review-cards-container-components";
import { Review, ReviewResponse } from "../../utils/store/type";

const ReviewComponent: FC<ReviewResponse> = ({ results }) => {
  return (
    <div className="w-full py-10 px-4 md:px-[5.12rem]">
      <h1 className="text-[2.4rem]  text-primaryText font-extrabold mb-5">
        Reviews
      </h1>
      <ReviewCardsContainerComponents reviews={results as Review[]} />
    </div>
  );
};

export default ReviewComponent;
