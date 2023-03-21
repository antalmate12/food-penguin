import styles from "@/styles/MainFooter.module.scss";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import penguinImage from "@/public/penguin.png";

import appStoreImage from "@/public/stores/app-store.png";
import playStoreImage from "@/public/stores/play-store.png";
import Container from "@mui/material/Container";

const MainFooter = () => {
  return (
    <Toolbar className={styles.MainFooter} component={"footer"}>
      <Container className={styles.FooterContainer}>
        <div className={styles.LeftPromo}>
        <Image height={48} width={48} src={penguinImage} alt={"penguin face"} /> 
        <Image height={38} alt="app store" src={appStoreImage} />
        <Image height={46} alt="play store" src={playStoreImage} /> 
        </div>
       
        <p>Footer</p>
      </Container>
    </Toolbar>
  );
};

export default MainFooter;
