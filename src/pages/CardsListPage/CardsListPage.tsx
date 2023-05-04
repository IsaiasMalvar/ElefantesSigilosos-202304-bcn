import { useContext, useEffect } from "react";
import CardsListPageStyled from "./CardsListPageStyled";
import GameCardContext from "../../store/contexts/GameCardsContext/GameCardsContext";
import { loadGameCardsActionCreator } from "../../store/actions/gameCards/gameCardsActionCreators";
import { GameCardStructure } from "../../types/types";

const CardsPage = (): JSX.Element => {
  const { dispatch } = useContext(GameCardContext);

  useEffect(() => {
    const cardsSample: GameCardStructure[] = [
      {
        id: 2,
        name: "Fencing Ace",
        type: "Creature — Human Soldier",
        flavor:
          "His prowess gives the guildless hope that they can hold out against tyranny.",
        rarity: "Uncommon",
        artist: "David Rapoza",
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489688&type=card",
        number: 2,
      },
      {
        id: 3,
        name: "Flickerwisp",
        type: "Creature — Elemental",
        flavor: "Its wings disturb more than air.",
        rarity: "Uncommon",
        artist: "Jeremy Enecio",
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489689&type=card",
        number: 3,
      },
    ];
    dispatch(loadGameCardsActionCreator(cardsSample));
  }, [dispatch]);

  return (
    <CardsListPageStyled>
      <h1 className="cards-intro">Explore our cards</h1>
    </CardsListPageStyled>
  );
};

export default CardsPage;
