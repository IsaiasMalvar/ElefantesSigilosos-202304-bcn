import GameCardsContextProvider from "./GameCardsContextProvider";
import { render, screen } from "@testing-library/react";

describe("Given a GameCardsContextProvider", () => {
  describe("When it's rendered with a children", () => {
    test("Then it should show a heading with 'hola' inside", () => {
      const text = "Hola";
      const children = <h1>{text}</h1>;

      render(<GameCardsContextProvider>{children}</GameCardsContextProvider>);

      const heading = screen.getByRole("heading", { name: text });

      expect(heading).toBeInTheDocument();
    });
  });
});
