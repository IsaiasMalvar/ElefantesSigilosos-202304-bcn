import { PropsWithChildren } from "react";
import GameCardContext from "./GameCardsContext";
import { GameCardsContextStructure } from "./types";

const GameCardsContextProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const cardStore: GameCardsContextStructure = {
    gameCards: [],
    currentPage: 1,
    loadCard: () => {},
    deleteCard: () => {},
    createCard: () => {},
    editCard: () => {},
    filterCards: () => {},
  };

  return (
    <GameCardContext.Provider value={cardStore}>
      {children}
    </GameCardContext.Provider>
  );
};

export default GameCardsContextProvider;
