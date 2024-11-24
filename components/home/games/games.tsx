import Image from "next/image";
import Link from "next/link";
import { GameSectionWrapper } from "./games.styled";

const GameSection = () => {
  const games = [
    {
      title: "UP!",
      image: "/images/UP_Summer.webp",
      link: "http://play2helpup.free.nf/",
    },
    {
      title: "YUM Game",
      image: "/images/YUM_Summer.webp",
      link: "http://play2helpyum.free.nf",
    },
    {
      title: "POP!",
      image: "/images/POP+WATER_AID.webp",
      link: "https://daf7f8k0buj1j.cloudfront.net/bubble-invasion/index.html",
    },
  ];

  return (
    <GameSectionWrapper>
      <div className="header">
        <h2>Our Games</h2>
        <p>
          Explore and play our engaging games. Share the fun with your friends!
        </p>
      </div>

      <div className="game-list">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <div className="content">
              <h2>{game.title}</h2>
              <Link href={game.link}>
                <span className="play-share-btn">Play Now</span>
              </Link>
            </div>
            <div className="image-wrapper">
              <Image
                src={game.image}
                alt={`${game.title} game`}
                width={500}
                height={300}
              />
            </div>
          </div>
        ))}
      </div>
    </GameSectionWrapper>
  );
};

export default GameSection;
