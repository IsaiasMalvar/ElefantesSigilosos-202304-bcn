import { GameCardStructure } from "../../../types/types";
import { GameCardsAction } from "../../actions/gameCards/types";

export interface GameCardsState {
  gameCards: GameCardStructure[];
  currentPage: number;
}

export interface GameCardsContextStructure {
  gameCardsState: GameCardsState;
  dispatch: React.Dispatch<GameCardsAction>;
}
