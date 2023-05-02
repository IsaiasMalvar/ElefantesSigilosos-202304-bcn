import { GameCardStructure } from "../../../types/types";

export enum GameCardsActionsType {
  loadCharacters,
}

export interface GameCardsAction {
  type: GameCardsActionsType;
  payload?: unknown;
}

export interface LoadGameCardsAction extends GameCardsAction {
  type: GameCardsActionsType.loadCharacters;
  payload: GameCardStructure[];
}
