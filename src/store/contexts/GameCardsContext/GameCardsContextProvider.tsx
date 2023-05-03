import { PropsWithChildren, useMemo, useReducer } from "react";
import GameCardContext from "./GameCardsContext";

import gameCardsReducer from "../../reducers/Cards/gameCardsReducer";
import { GameCardsContextStructure } from "./types";

const GameCardsContextProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [state, dispatch] = useReducer(gameCardsReducer, {
    gameCards: [],
    currentPage: 1,
  });

  const cardStore: GameCardsContextStructure = useMemo(
    () => ({
      dispatch,
      gameCardsState: state,
    }),
    [state]
  );

  return (
    <GameCardContext.Provider value={cardStore}>
      {children}
    </GameCardContext.Provider>
  );
};

export default GameCardsContextProvider;
