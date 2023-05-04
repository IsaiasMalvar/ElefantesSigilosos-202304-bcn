import { useContext, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import CardsListPageStyled from "./CardsListPageStyled";
import GameCardContext from "../../store/contexts/GameCardsContext/GameCardsContext";
import GameCardsList from "../../components/GameCardsList/GameCardsList";

const CardsPage = () => {
  const { loadCards } = useAxios();
  const { gameCardsState } = useContext(GameCardContext);

  useEffect(() => {
    loadCards();
  }, [loadCards]);
  return (
    <CardsListPageStyled>
      <h1 className="cards-intro">Explore our cards</h1>
      <GameCardsList
        cards={gameCardsState.gameCards}
        handleDeleteClick={() => ({})}
      />
    </CardsListPageStyled>
  );
};

export default CardsPage;
