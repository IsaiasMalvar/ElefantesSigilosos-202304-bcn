import { render, screen } from "@testing-library/react";
import UiContextProvider from "./UiContextProvider";

describe("Given a UiContextProvider", () => {
  describe("When it is rendered with a 'Loading...' children", () => {
    test("Then it should show a heading with Loading...", () => {
      const loadingText = "Loading...";
      const children = <h2>{loadingText}</h2>;

      render(<UiContextProvider>{children}</UiContextProvider>);

      const loadingHeading = screen.getByRole("heading", {
        name: loadingText,
      });

      expect(loadingHeading).toBeInTheDocument();
    });
  });
});
