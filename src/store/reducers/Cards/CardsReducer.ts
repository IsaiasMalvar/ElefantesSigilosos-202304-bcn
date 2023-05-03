import { Reducer } from "react";
import {
  GameCardsActionsType,
  LoadGameCardsAction,
} from "../../actions/gameCards/types";
import { GameCardStructure } from "../../../types/types";
import { GameCardsAction } from "../../actions/gameCards/types";

const gameCardsReducer: Reducer<GameCardStructure[], GameCardsAction> = (
  currentGameCards,
  action
) => {
  let newGameCards: GameCardStructure[] = [];
  switch (action.type) {
    case GameCardsActionsType.loadCharacters:
      newGameCards = [
        ...currentGameCards,
        ...(action as LoadGameCardsAction).payload,
      ];
      break;
    default:
      newGameCards = currentGameCards;
  }
  return newGameCards;
};

export default gameCardsReducer;
