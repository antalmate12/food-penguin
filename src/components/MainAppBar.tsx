import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

import styles from "@/styles/MainAppBar.module.scss";

import penguinImage from "@/public/penguin.png";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

const MainAppBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className={styles.MainAppBar}
          elevation={0}
          position="fixed"
          color="primary"
        >
          <Toolbar>
            <Container>
              <Stack
                alignItems={"center"}
                width={"100%"}
                direction={"row"}
                gap={4}
              >
                <Image
                  height={48}
                  width={48}
                  src={penguinImage}
                  alt={"penguin face"}
                />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  FoodPenguin
                </Typography>
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default MainAppBar;
