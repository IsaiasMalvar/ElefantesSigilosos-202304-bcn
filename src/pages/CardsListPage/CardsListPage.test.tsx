import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import CardsListPage from "./CardsListPage";
import theme from "../../styles/theme/theme";
import GameCardsContextProvider from "../../store/contexts/GameCardsContext/GameCardsContextProvider";

describe("Given a CardsListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Explore our cards' inside a h1", () => {
      const expectedText = "Explore our cards";

      render(
        <GameCardsContextProvider>
          <ThemeProvider theme={theme}>
            <CardsListPage />
          </ThemeProvider>
        </GameCardsContextProvider>
      );

      const heading = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
