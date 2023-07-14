import { FC } from "react";
import { Movie } from "./types";
import Card from "./card";
import Loki from "../../assets/images/loki.png";
import Chernobyl from "../../assets/images/chernobyl.png";
import Rick from "../../assets/images/rick-and-morty.png";
import BloodShot from "../../assets/images/bloodshot.png";

const moviesData = [
  {
    name: "Loki",
    rating: 4.5,
    category: "Superhero",
    length: 6,
    image: Loki,
  },
  {
    name: "Chernobyl",
    rating: 5,
    category: "Mini Series",
    length: 5,
    image: Chernobyl,
  },
  {
    name: "Rick and Morty",
    rating: 5,
    category: "Fantasy",
    length: 49,
    image: Rick,
  },
  {
    name: "Bloodshot",
    rating: 4.3,
    category: "Action",
    length: 5,
    image: BloodShot,
  },
  {
    name: "Bloodshot",
    rating: 4.3,
    category: "Action",
    length: 5,
    image: BloodShot,
  },
];

const CardContainer: FC = () => {
  return (
    <div className="flex flex-row justify-start items-center space-x-[1.88rem] w-full overflow-x-auto">
      {moviesData.map((m: Movie, index) => (
        <Card
          key={index}
          name={m.name}
          rating={m.rating}
          category={m.category}
          length={m.length}
          image={m.image}
        />
      ))}
    </div>
  );
};

export default CardContainer;
