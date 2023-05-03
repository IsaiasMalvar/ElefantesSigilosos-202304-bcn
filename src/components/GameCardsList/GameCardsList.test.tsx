import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import GameCardsList from "./GameCardsList";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

const handleDeleteClick = jest.fn();

const gameCards = [
  {
    id: 142,
    name: "Talrand, Sky Summoner",
    type: "Legendary Creature — Merfolk Wizard",
    flavor:
      '"The seas are vast, but the skies are even more so. Why be content with one kingdom when I can rule them both?"',
    rarity: "Rare",
    artist: "Svetlin Velinov",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=573402&type=card",
    number: 142,
  },
  {
    id: 143,
    name: "Venser, Shaper Savant",
    type: "Legendary Creature — Human Wizard",
    flavor:
      "His marvels of artifice pale in comparison to the developing machinery of his mind.",
    rarity: "Rare",
    artist: "Aleksi Briclot",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=573403&type=card",
    number: 143,
  },
];

const routes = [
  {
    path: "/",
    element: (
      <ThemeProvider theme={theme}>
        <GameCardsList
          cards={gameCards}
          handleDeleteClick={handleDeleteClick}
        />
      </ThemeProvider>
    ),
  },
];

const router = createMemoryRouter(routes);

describe("Given a GameCardsList component", () => {
  describe("When it receives a list with Talrand, Sky Summoner and Venser, Shaper Savant", () => {
    test("Then it should show Talrand, Sky Summoner and Venser, Shaper Savant cards", () => {
      const talrandName = "Talrand, Sky Summoner";
      const venserName = "Venser, Shaper Savant";

      render(<RouterProvider router={router} />);

      const talrand = screen.getByRole("heading", {
        name: talrandName,
      });
      const venser = screen.getByRole("heading", {
        name: venserName,
      });

      expect(talrand).toBeInTheDocument();
      expect(venser).toBeInTheDocument();
    });
  });
});
