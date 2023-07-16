import React, { FC } from "react";
import Rating from "react-rating";
import { Star } from "../Icon-components";

const RatingComponent: FC<{ rating: number }> = ({ rating }) => {
  return (
    <Rating
      emptySymbol={<Star color="#4F4F54" />}
      fullSymbol={<Star color="#F8B319" />}
      initialRating={rating}
      readonly
    />
  );
};

export default RatingComponent;
