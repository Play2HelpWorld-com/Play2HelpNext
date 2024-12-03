import { Game } from "@/types/game";

const GameData: Game[] = [
  {
    id: 1,
    title: "UP!",
    description:
      "Streamline the product development flow with a content platform that's aligned across specs and insights.",
    image: "/images/games/extra1.png",
    alt: "Workflow 01",
    buttonText: "Play Now",
    playLink: "http://play2helpup.free.nf/",
  },
  {
    id: 2,
    title: "YUM Game",
    description:
      "Streamline the product development flow with a content platform that's aligned across specs and insights.",
    image: "/images/games/extra2.png",
    alt: "Workflow 02",
    buttonText: "Play Now",
    playLink: "http://play2helpyum.free.nf",
  },
  {
    id: 3,
    title: "POP!",
    description:
      "Streamline the product development flow with a content platform that's aligned across specs and insights.",
    image: "/images/games/extra3.png",
    alt: "Workflow 03",
    buttonText: "Play Now",
    playLink: "https://daf7f8k0buj1j.cloudfront.net/bubble-invasion/index.html",
  },
  {
    id: 4,
    title: "HISS!",
    description: "Can you stop the HISS snake to save the world? 🐍",
    image: "/images/games/extra4.png",
    alt: "Workflow 01",
    buttonText: "Play Now",
    playLink:
      `${process.env.NEXT_PUBLIC_GAME_SERVER_URI}/snakeGame/`,
  },
  {
    id: 5,
    title: "3-2-1!",
    description:
      "Streamline the product development flow with a content platform that's aligned across specs and insights.",
    image: "/images/games/extra5.png",
    alt: "Workflow 02",
    buttonText: "Play Now",
    playLink:
      `${process.env.NEXT_PUBLIC_GAME_SERVER_URI}/racingGame/`,
  },
  {
    id: 6,
    title: "Rail Rush!",
    description:
      "Streamline the product development flow with a content platform that's aligned across specs and insights.",
    image: "/images/games/extra2.png",
    alt: "Workflow 03",
    buttonText: "Play Now",
    playLink:
      `${process.env.NEXT_PUBLIC_GAME_SERVER_URI}/railrushGame/`,
  },
  {
    id: 7,
    title: "GRRR!",
    description:
      "Streamline the product development flow with a content platform that's aligned across specs and insights.",
    image: "/images/games/extra3.png",
    alt: "Workflow 01",
    buttonText: "Play Now",
    playLink: `${process.env.NEXT_PUBLIC_GAME_SERVER_URI}/grrGame`,
  },
  {
    id: 8,
    title: "FLY!",
    description:
      "Streamline the product development flow with a content platform that's aligned across specs and insights.",
    image: "/images/games/extra4.png",
    alt: "Workflow 02",
    buttonText: "Play Now",
    playLink:
      `${process.env.NEXT_PUBLIC_GAME_SERVER_URI}/spaceShotter/`,
  },
  {
    id: 10,
    title: "GO!",
    description:
      "Streamline the product development flow with a content platform that's aligned across specs and insights.",
    image: "/images/games/extra1.png",
    alt: "Workflow 01",
    buttonText: "Play Now",
    playLink:
      `${process.env.NEXT_PUBLIC_GAME_SERVER_URI}/goGame/`,
  },
];

export default GameData;
