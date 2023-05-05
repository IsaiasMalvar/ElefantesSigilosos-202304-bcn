import { rest } from "msw";

export const handlers = [
  rest.get("https://localhost:4000/cards", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "Ethersworn Canonist",
          type: "Artifact Creature — Human Cleric",
          flavor:
            '"The noble work of our order is to infuse all life on Esper with etherium. Our goal will be reached more rapidly if new life is . . . suppressed."',
          rarity: "Rare",
          artist: "Izzy",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489687&type=card",
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
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489688&type=card",
          number: 2,
        },
      ])
    );
  }),
];
