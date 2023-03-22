import styles from "@/styles/HomePage.module.scss";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    {
      label: "Felfedezés",
    },
    {
      label: "Éttermek",
    },
    {
      label: "Üzletek",
    },
  ];

  return (
    <Box>
      <Stack
        direction={"row"}
        alignContent={"center"}
        justifyContent={"center"}
        gap={2}
      >
        {tabs.map((tab, index) => (
          <div
            className={[
              styles.Tab,
              selectedTab === index ? styles.SelectedTab : "",
            ].join(" ")}
            key={index}
            onClick={() => setSelectedTab(index)}
            style={{}}
          >
            {tab.label}
          </div>
        ))}
      </Stack>
    </Box>
  );
};

export default HomePage;
