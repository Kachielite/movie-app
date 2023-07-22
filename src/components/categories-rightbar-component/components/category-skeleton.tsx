import { FC } from "react";
import Skeleton from "react-loading-skeleton";

const CategorySkeleton: FC = () => {
  return (
    <Skeleton
      height="8.06rem"
      width="13.13rem"
      borderRadius="0.5rem"
      baseColor="#22242D"
      highlightColor="#9BA3AF"
    />
  );
};

export default CategorySkeleton;
