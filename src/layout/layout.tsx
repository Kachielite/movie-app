import { FC, ReactNode } from "react";
import SideMenu from "./SideMenu";
import BackgroundGraphics from "../components/backgroundGraphics";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="relative w-screen h-screen flex flex-row bg-[#000] overflow-hidden">
      <BackgroundGraphics />
      <div className="absolute z-40 flex flex-row">
        <SideMenu />
        {children}
      </div>
    </main>
  );
};

export default Layout;
