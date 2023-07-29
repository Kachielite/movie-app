import { FC } from "react";
import { Close } from "../components/Icon-components";
import Library from "../components/sidebar-components/library";
import Menu from "../components/sidebar-components/menu";
import { TbBrandPlanetscale } from "react-icons/tb";
import { Link } from "react-router-dom";

interface Props {
  setIsOpen: (state: boolean) => void;
}

const SideMenu: FC<Props> = ({ setIsOpen }) => {
  return (
    <div className="relative h-screen w-full pl-[2.25rem] pr[1.44rem] pt-4 flex flex-col space-y-[2.06rem] bg-black lg:bg-opacity-0 overflow-y-auto pb-10 scrollbar-thumb-primary scrollbar-thin">
      <button
        onClick={() => setIsOpen(false)}
        className="block lg:hidden absolute left-4"
      >
        <Close />
      </button>
      <Link
        to="/"
        className="w-[11rem] h-[4.63rem] flex flex-row justify-between items-center p-0"
      >
        <TbBrandPlanetscale color="#F8B319" size="3.5rem" />
        <div className="text-primary mr-4 md:mr-0 text-[2rem] font-['Luckiest Guy'] leading-none">
          <p>MOVIES</p>
          <p>PLANET</p>
        </div>
      </Link>
      <Menu />
      <Library />
    </div>
  );
};

export default SideMenu;
