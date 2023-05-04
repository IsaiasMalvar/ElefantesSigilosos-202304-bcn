import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/theme";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter/appRouter";
import "@fontsource/poppins";
import "@fontsource/merriweather";
import GameCardsContextProvider from "./store/contexts/GameCardsContext/GameCardsContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GameCardsContextProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={appRouter} />
        <GlobalStyle />
      </ThemeProvider>
    </GameCardsContextProvider>
  </React.StrictMode>
);
