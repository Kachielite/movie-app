import { FC } from "react";
import Logo from "../assets/images/logo.png";
import { Close } from "../components/Icon-components";
import Library from "../components/sidebar-components/library";
import Menu from "../components/sidebar-components/menu";

interface Props {
  setIsOpen: (state: boolean) => void;
}

const SideMenu: FC<Props> = ({ setIsOpen }) => {
  return (
    <div className="relative h-screen w-full pl-[2.25rem] pr[1.44rem] pt-4 flex flex-col space-y-[2.06rem] bg-black lg:bg-opacity-0">
      <button
        onClick={() => setIsOpen(false)}
        className="block lg:hidden absolute left-4"
      >
        <Close />
      </button>
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
