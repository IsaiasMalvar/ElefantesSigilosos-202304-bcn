import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import CardsListPage from "./CardsListPage";
import theme from "../../styles/theme/theme";

describe("Given a CardsListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Explore our cards' inside a h1", () => {
      const expectedText = "Explore our cards";

      render(
        <ThemeProvider theme={theme}>
          <CardsListPage />
        </ThemeProvider>
      );

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
