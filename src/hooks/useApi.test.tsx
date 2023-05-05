import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import { server } from "../mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("Given a getCards function", () => {
  describe("When called", () => {
    test("Then it should return 10 cards", async () => {
      const expectedCards = [
        {
          id: 1,
          name: "Ethersworn Canonist",
          type: "Artifact Creature — Human Cleric",
          flavor:
            '"The noble work of our order is to infuse all life on Esper with etherium. Our goal will be reached more rapidly if new life is . . . suppressed."',
          rarity: "Rare",
          artist: "Izzy",
          imageUrl:
            "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489687&type=card",
          number: 1,
        },
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
        {
          id: 4,
          name: "Fortify",
          type: "Instant",
          flavor:
            '"Where metal is tainted and wood is scarce, we are best armed by faith."\n' +
            "—Tavalus, acolyte of Korlis",
          rarity: "Common",
          artist: "Christopher Moeller",
          imageUrl:
            "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489690&type=card",
          number: 4,
        },
        {
          id: 5,
          name: "Glint-Sleeve Artisan",
          type: "Creature — Dwarf Artificer",
          flavor: '"Shine bright, bolts tight."',
          rarity: "Common",
          artist: "Ryan Pancoast",
          imageUrl:
            "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489691&type=card",
          number: 5,
        },
        {
          id: 6,
          name: "Kemba, Kha Regent",
          type: "Legendary Creature — Cat Cleric",
          flavor:
            '"I am not Raksha. I never will be. But I refuse to be the kha who watched her pride be torn asunder."',
          rarity: "Rare",
          artist: "Todd Lockwood",
          imageUrl:
            "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489692&type=card",
          number: 6,
        },
        {
          id: 7,
          name: "Land Tax",
          type: "Enchantment",
          flavor: null,
          rarity: "Mythic",
          artist: "Chuck Lukacs",
          imageUrl:
            "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489693&type=card",
          number: 7,
        },
        {
          id: 8,
          name: "Leonin Abunas",
          type: "Creature — Cat Cleric",
          flavor:
            "Only leonin clerics who can survive the Razor Fields for one turning of the suns can stand in the Cave of Light.",
          rarity: "Rare",
          artist: "Carl Critchlow",
          imageUrl:
            "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489694&type=card",
          number: 8,
        },
        {
          id: 9,
          name: "Master Splicer",
          type: "Creature — Phyrexian Human Artificer",
          flavor:
            "With Phyrexia's victory at hand, each sect began perfecting its vision.",
          rarity: "Uncommon",
          artist: "Chippy",
          imageUrl:
            "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489695&type=card",
          number: 9,
        },
        {
          id: 10,
          name: "Myrsmith",
          type: "Creature — Human Artificer",
          flavor:
            "The Auriok see the artificer as a conduit, beckoning new creations into the world.",
          rarity: "Uncommon",
          artist: "Eric Deschamps",
          imageUrl:
            "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489696&type=card",
          number: 10,
        },
      ];

      const { result } = renderHook(() => useApi());
      const { getCards } = await result.current;
      const cards = await getCards();

      expect(cards).toStrictEqual(expectedCards);
    });
  });
});
