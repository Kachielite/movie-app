import { FC } from "react";
import Menu from "./menu";
import SearchBar from "./search-bar";

const menu = [
  {
    name: "Movies",
    link: "/",
  },
  {
    name: "TV Shows",
    link: "/",
  },
  {
    name: "Anime",
    link: "/",
  },
];

const NavBar: FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center font-lato w-full px-4 bg-black pb-px">
      <Menu menu={menu} />
      <SearchBar />
    </div>
  );
};

export default NavBar;
