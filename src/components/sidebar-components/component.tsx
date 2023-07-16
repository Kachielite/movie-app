import { cloneElement, FC } from "react";
import { MenuItem } from "./menu-types-d";
import { Link, useLocation, useParams } from "react-router-dom";

interface Props {
  menu: MenuItem[];
  title: string;
}

const MenuComponent: FC<Props> = ({ menu, title }) => {
  const { type } = useParams();
  const { pathname } = useLocation();
  const menuHighlighter = (name: string): string => {
    if (name === "Home") {
      return "/";
    } else {
      return `/category/${name.toLowerCase()}`;
    }
  };

  return (
    <div className="flex flex-col justify-start items-start space-y-[1.52rem] font-lato w-full">
      <h1 className="text-[#BABABA] font-bold">{title}</h1>
      <div className="flex flex-col justify-start items-start space-y-[1.62rem] w-full">
        {menu.map(({ icon, name }: MenuItem, index) => {
          return (
            <Link
              to={menuHighlighter(name)}
              className={`group flex flex-row space-x-[0.94rem] w-full cursor-pointer hover:border-r-4 hover:border-r-primary ${
                (name.toLowerCase() === type &&
                  "border-r-4 border-r-primary") ||
                (pathname === "/" &&
                  name === "Home" &&
                  "border-r-4 border-r-primary")
              }`}
              key={index}
            >
              {cloneElement(icon, {
                stroke:
                  name.toLowerCase() === type ||
                  (pathname === "/" && name === "Home")
                    ? "#F8B319"
                    : "#F9F9F9",
              })}
              <p
                className={`text-[1.125rem] font-semibold group-hover:text-primary  ${
                  name.toLowerCase() === type ||
                  (pathname === "/" && name === "Home")
                    ? "text-primary"
                    : "text-primaryText"
                }`}
              >
                {name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default MenuComponent;
