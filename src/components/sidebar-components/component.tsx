import { FC } from "react";
import { MenuItem } from "./menu-types-d";

interface Props {
  menu: MenuItem[];
  title: string;
}

const MenuComponent: FC<Props> = ({ menu, title }) => {
  return (
    <div className="flex flex-col justify-start items-start space-y-[1.52rem] font-lato w-full">
      <h1 className="text-[#BABABA] font-bold">{title}</h1>
      <div className="flex flex-col justify-start items-start space-y-[1.62rem] w-full">
        {menu.map((item: MenuItem) => {
          return (
            <div
              className="group flex flex-row space-x-[0.94rem] w-full cursor-pointer hover:border-r-4 hover:border-r-primary"
              key={item.name}
            >
              {item.icon}
              <p className="text-primaryText text-[1.125rem] font-semibold group-hover:text-primary">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MenuComponent;
