import { GameCardStructure } from "../../../types/types";

export interface GameCardsContextStructure {
  gameCards: GameCardStructure[];
  currentPage: number;
  loadCard: (gameCards: GameCardStructure[]) => void;
  deleteCard: (id: number) => void;
  createCard: (newCard: GameCardStructure) => void;
  editCard: (id: number, newData: GameCardStructure) => void;
  filterCards: (rarity: string) => void;
}
