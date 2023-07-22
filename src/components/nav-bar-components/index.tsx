import React, { Dispatch, FC, SetStateAction } from "react";
import SearchBar from "./search-bar";

// const menu = [
//   {
//     name: "Movies",
//     selection: "movie",
//   },
//   {
//     name: "TV Shows",
//     selection: "tv",
//   },
//   // {
//   //   name: "Anime",
//   //   link: "/",
//   // },
// ];

interface Props {
  open: Dispatch<SetStateAction<boolean>>;
}

const NavBar: FC<Props> = ({ open }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center font-lato w-full px-4 bg-black pb-px ">
      {/*<Menu menu={menu} />*/}
      <div />
      <SearchBar open={open} />
    </div>
  );
};

export default NavBar;
