import { cloneElement, FC } from "react";
import { MenuItem } from "./menu-types-d";
import { Link, useLocation, useParams } from "react-router-dom";
import { cleanupCategories } from "../../utils/store/slides/movie";
import { useAppDispatch } from "../../utils/store/hooks";

interface Props {
  menu: MenuItem[];
  title: string;
  setIsOpen: (state: boolean) => void;
}

const MenuComponent: FC<Props> = ({ menu, title, setIsOpen }) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const menuHighlighter = (name: string): string => {
    if (name === "Home") {
      return "/";
    } else if (name == "genre") {
      return "/genre";
    } else if (name == "watchlist") {
      return "/watchlist";
    } else {
      return `/category/${name.toLowerCase()}`;
    }
  };

  const LinkHandler = (link: string): void => {
    dispatch(cleanupCategories(link));
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col justify-start items-start space-y-[1.52rem] font-lato w-full">
      <h1 className="text-[#BABABA] font-bold">{title}</h1>
      <div className="flex flex-col justify-start items-start space-y-[1.62rem] w-full">
        {menu.map(({ icon, name, link }: MenuItem, index) => {
          return (
            <Link
              onClick={() => LinkHandler(link)}
              to={menuHighlighter(link)}
              className={`group flex flex-row space-x-[0.94rem] w-full cursor-pointer hover:border-r-4 hover:border-r-primary ${
                (pathname === `/category/${link.toLowerCase()}` &&
                  "border-r-4 border-r-primary") ||
                (pathname === "/" &&
                  name === "Home" &&
                  "border-r-4 border-r-primary") ||
                (pathname.includes("genre") &&
                  name === "Genre" &&
                  "border-r-4 border-r-primary") ||
                (pathname.includes("watchlist") &&
                  name === "Watchlist" &&
                  "border-r-4 border-r-primary")
              }`}
              key={index}
            >
              {cloneElement(icon, {
                stroke:
                  pathname === `/category/${link.toLowerCase()}` ||
                  (pathname === "/" && name === "Home") ||
                  (pathname.includes("genre") && name === "Genre") ||
                  (pathname.includes("watchlist") && name === "Watchlist")
                    ? "#F8B319"
                    : "#F9F9F9",
              })}
              <p
                className={`text-[1.125rem] font-semibold group-hover:text-primary  ${
                  pathname === `/category/${link.toLowerCase()}` ||
                  (pathname === "/" && name === "Home") ||
                  (pathname.includes("genre") && name === "Genre") ||
                  (pathname.includes("watchlist") && name === "Watchlist")
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
