import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show two links", () => {
      const routes = [
        {
          path: "/",
          element: (
            <ThemeProvider theme={theme}>
              <Navbar />
            </ThemeProvider>
          ),
        },
      ];

      const router = createMemoryRouter(routes);
      render(<RouterProvider router={router} />);

      expect(screen.getByText("Cards")).toBeInTheDocument();
      expect(screen.getByText("Create")).toBeInTheDocument();
    });
  });
});
