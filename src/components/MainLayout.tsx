import Container from "@mui/material/Container";
import { ReactNode } from "react";
import MainAppBar from "./MainAppBar";
import MainFooter from "./MainFooter";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <MainAppBar />
      <main style={{ paddingTop: "64px" }}>
        <Container>{children}</Container>
      </main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
