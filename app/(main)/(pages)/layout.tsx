import { ReactNode } from "react";

type TLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <div className="border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll">
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default Layout;
