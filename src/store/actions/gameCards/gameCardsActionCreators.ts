import { GameCardStructure } from "../../../types/types";
import { LoadGameCardsAction, GameCardsActionsType } from "./types";

export const loadGameCardsActionCreator = (
  cards: GameCardStructure[]
): LoadGameCardsAction => ({
  type: GameCardsActionsType.loadCharacters,
  payload: cards,
});
