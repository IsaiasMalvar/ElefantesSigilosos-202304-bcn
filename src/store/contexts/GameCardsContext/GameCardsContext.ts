import { createContext } from "react";
import { GameCardsContextStructure } from "./types";

const GameCardContext = createContext<GameCardsContextStructure>(
  {} as GameCardsContextStructure
);

export default GameCardContext;
