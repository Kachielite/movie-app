import { FC, useEffect } from "react";
import Loki from "../../assets/images/loki.png";
import Chernobyl from "../../assets/images/chernobyl.png";
import CategorySlide from "./components/category-slide";
import { fetchAllGenre } from "../../utils/store/slides/movie";
import { useAppDispatch } from "../../utils/store/hooks";

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllGenre());
  }, []);

  return (
    <div className="flex flex-col justify-start space-y-[3.75rem] items-center pl-[1.87rem] w-full h-full overflow-y-auto scrollbar-none pb-36">
      <CategorySlide
        movieData={moviesData}
        categoryTitle="Upcoming"
        type="movies"
      />
      <CategorySlide
        movieData={moviesData}
        categoryTitle="Trending"
        type="movies"
      />
      <CategorySlide categoryTitle="Genre" type="genre" />
    </div>
  );
};

export default CategoriesRightBarComponent;
