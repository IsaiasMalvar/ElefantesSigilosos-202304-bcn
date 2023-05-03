import { Reducer } from "react";
import {
  GameCardsActionsType,
  LoadGameCardsAction,
  GameCardsAction,
} from "../../actions/gameCards/types";
import { GameCardsState } from "../../contexts/GameCardsContext/types";

const gameCardsReducer: Reducer<GameCardsState, GameCardsAction> = (
  currentCardStore,
  action
): GameCardsState => {
  if (action.type === GameCardsActionsType.loadGameCards) {
    return {
      gameCards: [
        ...currentCardStore.gameCards,
        ...(action as LoadGameCardsAction).payload,
      ],
      currentPage: currentCardStore.currentPage,
    };
  }

  return currentCardStore;
};

export default gameCardsReducer;
