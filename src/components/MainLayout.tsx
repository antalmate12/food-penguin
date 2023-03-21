import { ReactNode } from "react";
import MainAppBar from "./MainAppBar";
import MainFooter from "./MainFooter";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <MainAppBar />
      <main style={{ paddingTop: "64px" }}>{children}</main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
