import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/src/theme";
import roboto from "@/src/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component
        style={{
          fontFamily: roboto,
        }}
        {...pageProps}
      />
    </ThemeProvider>
  );
}
