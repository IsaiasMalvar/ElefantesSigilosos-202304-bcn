import { loadGameCardsActionCreator } from "./gameCardsActionCreators";
import { GameCardsActionsType } from "./types";

const gameCards = [
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

describe("Given a function loadGameCardsActionCreator", () => {
  describe("When it receives gameCards", () => {
    test("Then it should return an action object with type: loadCharacters and payload: gameCards", () => {
      const action = {
        type: GameCardsActionsType.loadCharacters,
        payload: gameCards,
      };

      const expectedAction = loadGameCardsActionCreator(gameCards);

      expect(expectedAction).toStrictEqual(action);
    });
  });
});
