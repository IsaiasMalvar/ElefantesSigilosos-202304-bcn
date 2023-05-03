import { GameCardStructure } from "../../types/types";
import GameCard from "../GameCard/GameCard";
import GameCardsListStyled from "./GameCardsListStyled";

interface GameCardsListProps {
  cards: GameCardStructure[];
}
const GameCardsList = ({ cards }: GameCardsListProps) => {
  return (
    <GameCardsListStyled>
      {cards.map((card) => (
        <li>
          <GameCard card={card} key={card.id} handleDeleteClick={() => ({})} />
        </li>
      ))}
    </GameCardsListStyled>
  );
};

export default GameCardsList;
