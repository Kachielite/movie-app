import { FC } from "react";
import MenuItem from "./menu-item";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../utils/store/hooks";
import { selectionType } from "../../utils/store/slides/selection";

interface MenuLink {
  name: string;
  selection: string;
}

interface Props {
  menu: MenuLink[];
}

const Menu: FC<Props> = ({ menu }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-row space-x-[2.88rem] justify-center items-center mt-4 lg:mt-0">
      {menu.map((item: MenuLink, index) => (
        <button
          key={index}
          onClick={() => dispatch(selectionType(item.selection))}
        >
          <MenuItem name={item.name} />
        </button>
      ))}
    </div>
  );
};

export default Menu;
