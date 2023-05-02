import { screen, render } from "@testing-library/react";
import { GameCardStructure } from "../../types/types";
import GameCard from "./GameCard";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const card: GameCardStructure = {
  id: 1,
  name: "Starlight Invoker",
  artist: "Jeremy Enecio",
  flavor:
    "His prowess gives the guildless hope that they can hold out against tyranny.",
  imageUrl:
    "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489688&type=card",
  number: 1,
  rarity: "Uncommon",
  type: "Creature — Human Soldier",
};

const handleDeleteClick = jest.fn();

const routes = [
  {
    path: "/",
    element: (
      <ThemeProvider theme={theme}>
        <GameCard card={card} handleDeleteClick={handleDeleteClick} />
      </ThemeProvider>
    ),
  },
];

const router = createMemoryRouter(routes);

describe("Given a GameCard Component", () => {
  describe("When it receives a card named 'Starlight Invoker'", () => {
    test("Then it should show an heading with the name of the card: Starlight Invoker", () => {
      render(<RouterProvider router={router} />);

      const heading = screen.getByRole("heading", {
        level: 2,
      });

      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toBe(card.name);
    });

    test("Then it should show a text with the type of card: Creature — Human Soldier", () => {
      const label = "Card type";

      render(<RouterProvider router={router} />);

      const typeOfCard = screen.getByLabelText(label);

      expect(typeOfCard).toBeInTheDocument();
      expect(typeOfCard.textContent).toBe(card.type);
    });

    test("Then it should show a delete card button", () => {
      const buttonName = "Delete card";

      render(<RouterProvider router={router} />);

      const button = screen.getByRole("button", {
        name: buttonName,
      });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a image with alt text 'Starlight Invoker magic game card'", () => {
      const altText = "Starlight Invoker magic game card";

      render(<RouterProvider router={router} />);

      const image = screen.getByAltText(altText);

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it receives a card named 'Starlight Invoker' and the user clicks the delete button", () => {
    test("Then it should call the received handler", async () => {
      const buttonName = "Delete card";

      render(<RouterProvider router={router} />);

      const button = screen.getByRole("button", {
        name: buttonName,
      });

      await userEvent.click(button);

      expect(handleDeleteClick).toHaveBeenCalled();
    });
  });
});
