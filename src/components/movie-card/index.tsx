import { FC } from "react";
import { Movie } from "./types";
import Card from "./card";

const moviesData = [
  {
    name: "Loki",
    category: "Superhero",
    date: "24 Oct 23",
    rating: Math.floor(Math.random() * (5 - 1 + 1)),
    image: "https://source.unsplash.com/random/loki",
    description:
      "Ray Garrison, a soldier recently killed in action, is brought back to life as the superhero ...",
  },
  {
    name: "Loki",
    category: "Superhero",
    date: "24 Oct 23",
    rating: Math.floor(Math.random() * (5 - 1 + 1)),
    image: "https://source.unsplash.com/random/superman",
    description:
      "Ray Garrison, a soldier recently killed in action, is brought back to life as the superhero ...",
  },
  {
    name: "Loki",
    category: "Superhero",
    date: "24 Oct 23",
    rating: Math.floor(Math.random() * (5 - 1 + 1)),
    image: "https://source.unsplash.com/random/batman",
    description:
      "Ray Garrison, a soldier recently killed in action, is brought back to life as the superhero ...",
  },
  {
    name: "Loki",
    category: "Superhero",
    date: "24 Oct 23",
    rating: Math.floor(Math.random() * (5 - 1 + 1)),
    image: "https://source.unsplash.com/random/cinema",
    description:
      "Ray Garrison, a soldier recently killed in action, is brought back to life as the superhero ...",
  },
  {
    name: "Loki",
    category: "Superhero",
    date: "24 Oct 23",
    rating: Math.floor(Math.random() * (5 - 1 + 1)),
    image: "https://source.unsplash.com/random/cinema",
    description:
      "Ray Garrison, a soldier recently killed in action, is brought back to life as the superhero ...",
  },
  {
    name: "Loki",
    category: "Superhero",
    date: "24 Oct 23",
    rating: Math.floor(Math.random() * (5 - 1 + 1)),
    image: "https://source.unsplash.com/random/cinema",
    description:
      "Ray Garrison, a soldier recently killed in action, is brought back to life as the superhero ...",
  },
];

const MovieCard: FC = () => {
  return (
    <div className="flex flex-wrap mt-[1.12rem] justify-center md:justify-evenly lg:justify-between items-center w-full h-full px-4 overflow-y-scroll scrollbar-none pb-36">
      {moviesData.map(
        ({ name, description, date, image, rating }: Movie, index: number) => (
          <Card
            key={index}
            image={image}
            rating={rating}
            name={name}
            date={date}
            description={description}
          />
        ),
      )}
    </div>
  );
};

export default MovieCard;
