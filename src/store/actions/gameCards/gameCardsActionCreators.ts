import { GameCardStructure } from "../../../types/types";
import { LoadGameCardsAction, GameCardsActionsType } from "./types";

export const loadGameCardsActionCreator = (
  cards: GameCardStructure[]
): LoadGameCardsAction => {
  return {
    type: GameCardsActionsType.loadCharacters,
    payload: cards,
  };
};
