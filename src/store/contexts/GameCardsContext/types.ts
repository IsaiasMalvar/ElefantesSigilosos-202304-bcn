import { CardStructure } from "../../../types/types";

export interface GameCardsContextStructure {
  gameCards: CardStructure[];
  currentPage: number;
  loadCard: (gameCards: CardStructure[]) => void;
  deleteCard: (id: number) => void;
  createCard: (newCard: CardStructure) => void;
  editCard: (id: number, newData: CardStructure) => void;
  filterCards: (rarity: string) => void;
}
