import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import CardsListPageStyled from "./CardsListPageStyled";
import { useContext } from "react";
import GameCardContext from "../../store/contexts/GameCardsContext/GameCardsContext";
import { loadGameCardsActionCreator } from "../../store/actions/gameCards/gameCardsActionCreators";
import GameCardsList from "../../components/GameCardsList/GameCardsList";

const CardsPage = () => {
  const { gameCardsState, dispatch } = useContext(GameCardContext);

  const { getCards } = useAxios();

  useEffect(() => {
    (async () => {
      const cards = await getCards();
      dispatch(loadGameCardsActionCreator(cards));
    })();
  }, [dispatch, getCards]);

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
