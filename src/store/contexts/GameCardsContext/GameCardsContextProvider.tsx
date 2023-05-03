import { PropsWithChildren, useMemo } from "react";
import GameCardContext from "./GameCardsContext";
import { GameCardsContextStructure } from "./types";

const GameCardsContextProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const cardStore: GameCardsContextStructure = useMemo(
    () => ({
      gameCards: [],
      currentPage: 1,
    }),
    []
  );

  return (
    <GameCardContext.Provider value={cardStore}>
      {children}
    </GameCardContext.Provider>
  );
};

export default GameCardsContextProvider;
