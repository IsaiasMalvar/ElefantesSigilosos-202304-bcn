import { GameCardStructure } from "../../types/types";
import GameCardStyled from "./GameCardStyled";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete-button-icon.svg";
import { Link } from "react-router-dom";

interface GameCardProps {
  card: GameCardStructure;
  handleDeleteClick: (id: number) => void;
}

const GameCard = ({
  card: { name, type, imageUrl, id },
  handleDeleteClick,
}: GameCardProps): JSX.Element => {
  return (
    <GameCardStyled>
      <header className="gamecard-header">
        <h2 className="gamecard-header__title">{name}</h2>
        <button
          className="gamecard-header__button"
          onClick={() => handleDeleteClick(id)}
          aria-label="Delete card"
        >
          <DeleteIcon />
        </button>
      </header>
      <span className="gamecard-type" aria-label="Card type">
        {type}
      </span>
      <Link to={"/card/" + id} aria-label="Card details page">
        <img
          className="gamecard-image"
          src={imageUrl}
          alt={name + " magic game card"}
          width={265}
        />
      </Link>
    </GameCardStyled>
  );
};

export default GameCard;
