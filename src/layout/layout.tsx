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
      <div className="absolute z-40 flex flex-row w-full">
        <div
          className={`${
            isOpen ? "-translate-x-0 " : "-translate-x-full"
          } lg:-translate-x-0 w-[14.6875rem] absolute lg:static lg:block z-40 ease-in-out duration-1000`}
        >
          <SideMenu setIsOpen={setIsOpen} />
        </div>
        <div className="absolute z-20">
          <button onClick={() => setIsOpen(true)} className="block lg:hidden">
            <Menu />
          </button>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
