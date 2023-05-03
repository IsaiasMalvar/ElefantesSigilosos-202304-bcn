import { GameCardStructure } from "../../types/types";
import GameCard from "../GameCard/GameCard";
import GameCardsListStyled from "./GameCardsListStyled";

interface GameCardsListProps {
  cards: GameCardStructure[];
  handleDeleteClick: () => void;
}

const GameCardsList = ({ cards, handleDeleteClick }: GameCardsListProps) => {
  return (
    <GameCardsListStyled>
      {cards.map((card) => (
        <li key={card.id}>
          <GameCard card={card} handleDeleteClick={handleDeleteClick} />
        </li>
      ))}
    </GameCardsListStyled>
  );
};

export default GameCardsList;
