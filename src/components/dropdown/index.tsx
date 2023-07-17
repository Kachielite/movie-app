import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem, Divider } from "rc-menu";
import "rc-dropdown/assets/index.css";
import { FC } from "react";

const menu = (
  <Menu>
    <MenuItem key="1">rating</MenuItem>
    <Divider />
    <MenuItem key="2">date</MenuItem>
  </Menu>
);

const DropdownComponent: FC = () => {
  return (
    <div className="border-[0.095rem] border-primaryText rounded-[0.65rem]">
      <div>
        <Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
          <button style={{ width: 100 }} className="text-primaryText font-lato">
            open
          </button>
        </Dropdown>
      </div>
    </div>
  );
};

export default DropdownComponent;
