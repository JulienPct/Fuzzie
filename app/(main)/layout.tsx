import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import InfoBar from "@/components/infobar";

type TLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
