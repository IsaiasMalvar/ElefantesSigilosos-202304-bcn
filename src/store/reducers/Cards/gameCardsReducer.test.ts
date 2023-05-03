import { loadGameCardsActionCreator } from "../../actions/gameCards/gameCardsActionCreators";
import { GameCardsState } from "../../contexts/GameCardsContext/types";
import gameCardsReducer from "./gameCardsReducer";
import { GameCardsActionsType } from "../../actions/gameCards/types";

const cards = [
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

describe("Given a gameCardsReducer reducer", () => {
  describe("When it receives an empty list of cards and two cards", () => {
    test("Then it should return the received two cards", () => {
      const currentCardStore: GameCardsState = {
        gameCards: [],
        currentPage: 1,
      };
      const expectedCardsStore: GameCardsState = {
        gameCards: cards,
        currentPage: 1,
      };

      const updatedCardStore = gameCardsReducer(
        currentCardStore,
        loadGameCardsActionCreator(cards)
      );

      expect(updatedCardStore).toEqual(expectedCardsStore);
    });
  });

  describe("When it receives two cards and an unknown action", () => {
    test("Then it shoul return the same cards received", () => {
      const currentCardStore: GameCardsState = {
        gameCards: [],
        currentPage: 1,
      };

      const action = { type: GameCardsActionsType.test };

      const updatedCardStore = gameCardsReducer(currentCardStore, action);

      expect(updatedCardStore).toEqual(currentCardStore);
    });
  });
});
