import styles from "@/styles/MainFooter.module.scss";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import penguinImage from "@/public/penguin.png";

const MainFooter = () => {
  return (
    <Toolbar className={styles.MainFooter} component={"footer"}>
      <Image height={48} width={48} src={penguinImage} alt={"penguin face"} />

      <Image
        height={38}
        width={120}
        alt="app store"
        src="https://consumer-static-assets.wolt.com/app-store-badges/Download_on_the_App_Store_Badge_HU_RGB_blk_100317.svg"
      />
      <Image
        height={38}
        width={120}
        alt="play store"
        src="https://consumer-static-assets.wolt.com/app-store-badges/google-play-badge_hu.png"
      />
      <p>Footer</p>
    </Toolbar>
  );
};

export default MainFooter;
