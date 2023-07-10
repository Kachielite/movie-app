import { FC } from "react";
import { Home, Awards, Discover, Celebrities } from "../Icon-components";
import MenuComponent from "./component";

const MENU_ITEMS = [
  {
    name: "Menu",
    icon: <Home />,
  },
  {
    name: "Awards",
    icon: <Awards />,
  },
  {
    name: "Discover",
    icon: <Discover />,
  },
  {
    name: "Celebrities",
    icon: <Celebrities />,
  },
];

const Menu: FC = () => <MenuComponent menu={MENU_ITEMS} title="Menu" />;
export default Menu;
