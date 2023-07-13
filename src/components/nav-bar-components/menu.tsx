import { FC } from "react";
import MenuItem from "./menu-item";
import { Link } from "react-router-dom";

interface MenuLink {
  name: string;
  link: string;
}

interface Props {
  menu: MenuLink[];
}

const Menu: FC<Props> = ({ menu }) => {
  return (
    <div className="flex flex-row space-x-[2.88rem] justify-start items-start mt-4 lg:mt-0">
      {menu.map((item: MenuLink, index) => (
        <Link to={item.link} key={index}>
          <MenuItem name={item.name} />
        </Link>
      ))}
    </div>
  );
};

export default Menu;
