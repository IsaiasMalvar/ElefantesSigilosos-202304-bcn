import { Reducer } from "react";
import {
  GameCardsActionsType,
  LoadGameCardsAction,
} from "../../actions/gameCards/types";
import { GameCardsAction } from "../../actions/gameCards/types";
import { GameCardsContextStructure } from "../../contexts/GameCardsContext/types";

const gameCardsReducer: Reducer<GameCardsContextStructure, GameCardsAction> = (
  currentCardStore,
  action
) => {
  let newCardStore: GameCardsContextStructure = {
    gameCards: [],
    currentPage: 1,
  };
  switch (action.type) {
    case GameCardsActionsType.loadGameCards:
      newCardStore = {
        gameCards: [
          ...currentCardStore.gameCards,
          ...(action as LoadGameCardsAction).payload,
        ],
        currentPage: currentCardStore.currentPage,
      };
      break;
    default:
      newCardStore = currentCardStore;
  }
  return newCardStore;
};

export default gameCardsReducer;
