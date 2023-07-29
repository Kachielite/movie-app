import { FC, ReactNode, useState } from "react";
import SideMenu from "./SideMenu";
import BackgroundGraphics from "../components/backgroundGraphics";
import CategoriesRightbarComponent from "../components/categories-rightbar-component";
import NavBar from "../components/nav-bar-components";
import VideoModal from "../components/videoModal";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className="relative w-screen h-screen flex flex-row bg-[#000] overflow-hidden">
      <div className="absolute flex justify-center items-center z-40 bg-red-500 w-screen">
        <VideoModal />
      </div>
      <BackgroundGraphics />
      <div className="absolute z-10 flex flex-row w-full h-full">
        <div
          className={`${
            isOpen ? "-translate-x-0 " : "-translate-x-full"
          } lg:-translate-x-0 lg:w-[16.32%] w-[60%] absolute lg:static lg:block z-40 lg:z-20 ease-in-out duration-500 `}
        >
          <SideMenu setIsOpen={setIsOpen} />
        </div>
        <div className="absolute z-10 lg:static w-full h-full lg:w-[83.68%]">
          <div className="pb-2 lg:pt-[1.6rem] lg:pr-[2rem] w-full">
            <NavBar open={setIsOpen} />
          </div>
          <div className="flex flex-row w-full h-full">
            <div className="lg:w-[75.24%] w-full h-full">{children}</div>
            <div className="hidden lg:block font-lato w-[24.76%] pt-4 h-full">
              <CategoriesRightbarComponent />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
