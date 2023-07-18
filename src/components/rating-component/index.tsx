import React, { FC } from "react";
import Rating from "react-rating";
import { Star } from "../Icon-components";

const RatingComponent: FC<{ rating: number; size?: string }> = ({
  rating,
  size,
}) => {
  return (
    <Rating
      emptySymbol={<Star color="#4F4F54" size={size} />}
      fullSymbol={<Star color="#F8B319" size={size} />}
      initialRating={rating}
      readonly
    />
  );
};

export default RatingComponent;
