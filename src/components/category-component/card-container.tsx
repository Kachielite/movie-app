import { FC } from "react";
import { Movie } from "./types";
import Card from "./card";
import Loki from "../../assets/images/loki.png";
import Chernobyl from "../../assets/images/chernobyl.png";
import Rick from "../../assets/images/rick-and-morty.png";
import BloodShot from "../../assets/images/bloodshot.png";
import { NextBtn } from "../Icon-components";

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
    <div className="group relative w-screen lg:w-full h-full flex justify-center items-center ">
      <div className="absolute right-2.5 z-40 group-hover:scale-150 ease-in duration-300 hidden lg:flex justify-center items-center rounded-[0.25rem] space-x-[0.01rem] h-8 w-8 bg-black/[.3] p-3">
        <NextBtn />
      </div>
      <div className="flex flex-row justify-start items-center space-x-[1.88rem] py-4 w-full scroll-smooth scrollbar-corner-neutral-50 overflow-x-auto scrolling-touch  scroll-smooth scrollbar-none">
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
    </div>
  );
};

export default CardContainer;
