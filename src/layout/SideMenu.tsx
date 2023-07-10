import { FC } from "react";
import Logo from "../assets/images/logo.png";
import Menu from "../components/sidebar-components/menu";
import Library from "../components/sidebar-components/library";

const SideMenu: FC = () => {
  return (
    <div className="h-full w-[14.6875rem] pl-[2.25rem] pr[1.44rem] pt-[3.69rem] flex flex-col space-y-[2.06rem]">
      <div className="w-[11rem] h-[4.63rem] flex flex-row justify-between items-center p-0">
        <img src={Logo} alt="logo" className="w-[3.69rem] h-[3.69rem]" />
        <div className="text-primary text-[2rem] font-['Luckiest Guy'] leading-none">
          <p>HONEY</p>
          <p>MOVIES</p>
        </div>
      </div>
      <Menu />
      <Library />
    </div>
  );
};

export default SideMenu;
