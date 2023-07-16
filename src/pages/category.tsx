import { FC } from "react";
import { useParams } from "react-router-dom";

const Category: FC = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="flex flex-col flex-wrap justify-start items-start w-full h-full overflow-y-auto">
      <h1>Top Rated</h1>
    </div>
  );
};

export default Category;
