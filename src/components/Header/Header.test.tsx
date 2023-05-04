import { screen, render } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";

describe("Given a HeaderComponent", () => {
  describe("When it receives a logo text `Spellify`'", () => {
    test("Then it should show a logo", () => {
      const routes = [
        {
          path: "/",
          element: (
            <ThemeProvider theme={theme}>
              <Header />
            </ThemeProvider>
          ),
        },
      ];

      const router = createMemoryRouter(routes);
      render(<RouterProvider router={router} />);

      expect(screen.getByText("Spellify")).toBeInTheDocument();
    });
  });
});
