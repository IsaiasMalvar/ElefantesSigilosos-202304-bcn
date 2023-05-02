import GameCardContext from "./GameCardsContext";
import { useContext } from "react";
import GameCardsContextProvider from "./GameCardsContextProvider";
import { render, screen } from "@testing-library/react";

describe("Given a GameCardsContextProvider", () => {
  describe("When it's rendered with a ParagraphChildren", () => {
    test("Then it should contain the ParagraphChildren in the document", () => {
      const ParagraphChildren = (): JSX.Element => {
        const { gameCards } = useContext(GameCardContext);

        return (
          <p data-testid="card-paragraph">
            {`There are ${gameCards.length} cards in the context`}
          </p>
        );
      };

      render(
        <GameCardsContextProvider>
          <ParagraphChildren />
        </GameCardsContextProvider>
      );

      const cardParagraph = screen.getByTestId("card-paragraph");

      expect(cardParagraph).toBeInTheDocument();
    });
  });
});
