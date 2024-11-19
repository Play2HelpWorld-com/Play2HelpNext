import React from "react";
import Link from "next/link";
import {
  CardWrapper,
  CardContent,
  GameTitle,
  PlayButton,
  DescriptionList,
  DescriptionItem,
  NewGamesWrapper,
} from "./newGames.styled";

interface GameCardProps {
  title: string;
  imgSrc: string;
  description: string[];
  playLink: string;
  isComingSoon: boolean;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  imgSrc,
  description,
  playLink,
  isComingSoon,
}) => {
  return (
    <CardWrapper imgSrc={imgSrc}>
      <CardContent className="card-content">
        <GameTitle>{title}</GameTitle>
        <DescriptionList>
          {description.map((line, index) => (
            <DescriptionItem key={index}>{line}</DescriptionItem>
          ))}
        </DescriptionList>
        <PlayButton disabled={isComingSoon}>
          {isComingSoon ? (
            "Coming Soon"
          ) : (
            <Link href={playLink} target="_blank" rel="noopener noreferrer">
              Play
            </Link>
          )}
        </PlayButton>
      </CardContent>
    </CardWrapper>
  );
};

const NewGamesSection: React.FC = () => {
  const games = [
    {
      title: "HISS!",
      imgSrc: "/images/HISS+WWF-UK.webp",
      description: [
        "Can you stop the HISS snake to save the world?",
        "If you can, you can help charity WWF-UK.",
        "Every point you gain will increase a $ donation to WWF.",
        "So start smashing those snakes now. See social media for tips tricks.",
      ],
      playLink:
        "https://play2helpworld-com.github.io/Play2HelpServerLessGames/snakeGame/",
      isComingSoon: false,
    },
    {
      title: "3-2-1!",
      imgSrc: "/images/321+RED_CROSS.webp",
      description: [
        "Can you be the best 321 Racer to save the world?",
        "If you can, you can help charity Red Cross.",
        "Every point you gain will increase a $ donation to Red Cross.",
        "So start smashing those roads now. See social media for tips tricks.",
      ],
      playLink:
        "https://play2helpworld-com.github.io/Play2HelpServerLessGames/racingGame/",
      isComingSoon: false,
    },
    {
      title: "MORE!",
      imgSrc: "/images/MORE+MSF.webp",
      description: [
        "Can you stop the Rail Rush to save the world?",
        "If you can you can help charity MSF.",
        "Every point you gain will increase a $ donation to MSF.",
        "So start smashing those rails rush now. See social media for tips tricks.",
      ],
      playLink:
        "https://play2helpworld-com.github.io/Play2HelpServerLessGames/railrushGame/",
      isComingSoon: false,
    },
    {
      title: "GRRR!",
      imgSrc: "/images/GRRR+ALZEIMERS.webp",
      description: [
        "Can you stop the grrr Orcs to save the world?",
        "If you can, you can help charity Alzheimer.",
        "Every point you gain will increase a $ donation to Alzheimer.",
        "So start smashing those GRRR! Orcs now. See social media for tips tricks.",
      ],
      playLink: "https://play2helpgameserver.onrender.com",
      isComingSoon: false,
    },
    {
      title: "FLY!",
      imgSrc: "/images/FLY+UNICEF.webp",
      description: [
        "Can you stop the flying Crazy Rockets to save the world?",
        "If you can, you can help charity UNICEF.",
        "Every point you gain will increase a $ donation to UNICEF.",
        "So start smashing those crazy rockets now. See social media for tips tricks.",
      ],
      playLink:
        "https://play2helpworld-com.github.io/Play2HelpServerLessGames/spaceShotter/",
      isComingSoon: false,
    },
    {
      title: "GO!",
      imgSrc: "/images/GO+KIVA.webp",
      description: [
        "Can you stop the GO! Invaders to save the world?",
        "If you can, you can help charity Kiva.",
        "Every point you gain will increase a $ donation to Kiva.",
        "So start smashing those GO invaders now. See social media for tips tricks.",
      ],
      playLink:
        "https://play2helpworld-com.github.io/Play2HelpServerLessGames/goGame/",
      isComingSoon: false,
    },
  ];

  return (
    <NewGamesWrapper>
      <div className="text-left mb-10">
        <h3 className="text-3xl font-bold text-white">New Games</h3>
        <p className="text-gray-100">These are our new and coming soon games</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center">
        {games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            imgSrc={game.imgSrc}
            description={game.description}
            playLink={game.playLink}
            isComingSoon={game.isComingSoon}
          />
        ))}
      </div>
    </NewGamesWrapper>
  );
};

export default NewGamesSection;
