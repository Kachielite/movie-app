import { FC } from "react";
import {
  TopRated,
  Watchlist,
  NowPlaying,
  Popular,
  Upcoming,
  Trending,
} from "../Icon-components";
import MenuComponent from "./component";

const MENU_ITEMS = [
  {
    name: "Now Playing",
    icon: <NowPlaying />,
    link: "now_playing",
  },
  {
    name: "Top Rated",
    icon: <TopRated />,
    link: "top_rated",
  },
  {
    name: "Trending",
    icon: <Trending />,
    link: "trending",
  },
  {
    name: "Popular",
    icon: <Popular />,
    link: "popular",
  },
  {
    name: "Upcoming",
    icon: <Upcoming />,
    link: "upcoming",
  },
  {
    name: "Watchlist",
    icon: <Watchlist />,
    link: "watchlist",
  },
];

const Library: FC<{ setIsOpen: (state: boolean) => void }> = ({
  setIsOpen,
}) => <MenuComponent menu={MENU_ITEMS} title="Library" setIsOpen={setIsOpen} />;
export default Library;
