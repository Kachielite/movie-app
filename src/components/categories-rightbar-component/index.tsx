import { FC } from "react";
import Loki from "../../assets/images/loki.png";
import Chernobyl from "../../assets/images/chernobyl.png";
import CategorySlide from "./category-slide";

const moviesData = [
  {
    name: "Loki",
    category: "Superhero",
    length: 6,
    image: Loki,
  },
  {
    name: "Chernobyl",
    category: "Mini Series",
    length: 5,
    image: Chernobyl,
  },
];

const genreData = [
  {
    genre: "Anime",
    image: Chernobyl,
  },
  {
    genre: "Action",
    image: Loki,
  },
];

const CategoriesRightBarComponent: FC = () => {
  return (
    <div className="flex flex-col justify-start space-y-[3.75rem] items-center pl-[1.87rem] w-full h-full">
      <CategorySlide
        movieData={moviesData}
        categoryTitle="Playing"
        type="movies"
      />
      <CategorySlide
        movieData={moviesData}
        categoryTitle="Top Rated"
        type="movies"
      />
      <CategorySlide genreData={genreData} categoryTitle="Genre" type="genre" />
    </div>
  );
};

export default CategoriesRightBarComponent;
