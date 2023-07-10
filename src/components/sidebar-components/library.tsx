import { FC } from "react";
import {
  Recent,
  TopRated,
  Downloaded,
  Playlists,
  Watchlist,
  Completed,
} from "../Icon-components";
import MenuComponent from "./component";

const MENU_ITEMS = [
  {
    name: "Recent",
    icon: <Recent />,
  },
  {
    name: "Top Rated",
    icon: <TopRated />,
  },
  {
    name: "Downloaded",
    icon: <Downloaded />,
  },
  {
    name: "Playlists",
    icon: <Playlists />,
  },
  {
    name: "Watchlist",
    icon: <Watchlist />,
  },
  {
    name: "Completed",
    icon: <Completed />,
  },
];

const Library: FC = () => <MenuComponent menu={MENU_ITEMS} title="Library" />;
export default Library;
