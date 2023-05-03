import { GameCardStructure } from "../../../types/types";

export enum GameCardsActionsType {
  loadGameCards,
}

export interface GameCardsAction {
  type: GameCardsActionsType;
  payload?: unknown;
}

export interface LoadGameCardsAction extends GameCardsAction {
  type: GameCardsActionsType.loadGameCards;
  payload: GameCardStructure[];
}
