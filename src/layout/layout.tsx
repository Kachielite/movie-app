import { FC, ReactNode, useState } from "react";
import SideMenu from "./SideMenu";
import BackgroundGraphics from "../components/backgroundGraphics";
import { Menu } from "../components/Icon-components";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className="relative w-screen h-screen flex flex-row bg-[#000] overflow-hidden">
      <BackgroundGraphics />
      <div className="absolute z-40 flex flex-row w-full h-full">
        <div
          className={`${
            isOpen ? "-translate-x-0 " : "-translate-x-full"
          } lg:-translate-x-0 w-[14.6875rem] absolute lg:static lg:block z-40 lg:z-20 ease-in-out duration-500 `}
        >
          <SideMenu setIsOpen={setIsOpen} />
        </div>
        <div className="absolute z-20 lg:static w-full h-full">
          <button
            onClick={() => setIsOpen(true)}
            className="block lg:hidden p-3"
          >
            <Menu />
          </button>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
