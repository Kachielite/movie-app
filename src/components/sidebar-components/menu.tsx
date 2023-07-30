import { FC } from "react";
import { Home, Discover, Celebrities, Genre } from "../Icon-components";
import MenuComponent from "./component";

const MENU_ITEMS = [
  {
    name: "Home",
    icon: <Home />,
    link: "Home",
  },
  {
    name: "Discover",
    icon: <Discover />,
    link: "discovery",
  },
  {
    name: "Celebrities",
    icon: <Celebrities />,
    link: "person",
  },
  {
    name: "Genre",
    icon: <Genre />,
    link: "genre",
  },
];

const Menu: FC<{ setIsOpen: (state: boolean) => void }> = ({ setIsOpen }) => (
  <MenuComponent menu={MENU_ITEMS} title="Menu" setIsOpen={setIsOpen} />
);
export default Menu;
