import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GameCardProps {
  title: string;
  imgSrc: string;
  description: string[];
  playLink: string;
  isComingSoon: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ title, imgSrc, description, playLink, isComingSoon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col items-center text-center">
      <div className="mb-4">
        <Image src={imgSrc} alt={title} width={200} height={200} className="rounded-lg" />
      </div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <ul className="text-gray-600 mb-4 space-y-2">
        {description.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
      <button
        className={`py-2 px-4 rounded-lg font-semibold ${
          isComingSoon ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        disabled={isComingSoon}
      >
        {isComingSoon ? (
          "Coming Soon"
        ) : (
          <Link href={playLink} target="_blank" rel="noopener noreferrer">
            Play
          </Link>
        )}
      </button>
    </div>
  );
};

const NewGamesSection: React.FC = () => {
  const games = [
    {
      title: 'HISS!',
      imgSrc: '/images/HISS+WWF-UK.webp',
      description: [
        'Can you stop the HISS snake to save the world?',
        'If you can, you can help charity WWF-UK.',
        'Every point you gain will increase a $ donation to WWF.',
        'So start smashing those snakes now. See social media for tips tricks.',
      ],
      playLink: 'http://play2help.unaux.com/games/snakeGame/',
      isComingSoon: false,
    },
    {
      title: '3-2-1!',
      imgSrc: '/images/321+RED_CROSS.webp',
      description: [
        'Can you be the best 321 Racer to save the world?',
        'If you can, you can help charity Red Cross.',
        'Every point you gain will increase a $ donation to Red Cross.',
        'So start smashing those roads now. See social media for tips tricks.',
      ],
      playLink: 'http://play2help.unaux.com/games/racingGame/',
      isComingSoon: false,
    },
    {
      title: 'MORE!',
      imgSrc: '/images/MORE+MSF.webp',
      description: [
        'Can you stop the Rail Rush to save the world?',
        'If you can you can help charity MSF.',
        'Every point you gain will increase a $ donation to MSF.',
        'So start smashing those rails rush now. See social media for tips tricks.',
      ],
      playLink: 'http://play2help.unaux.com/games/railrushGame/',
      isComingSoon: false,
    },
    {
      title: 'GRRR!',
      imgSrc: '/images/GRRR+ALZEIMERS.webp',
      description: [
        'Can you stop the grrr Orcs to save the world?',
        'If you can, you can help charity Alzheimer.',
        'Every point you gain will increase a $ donation to Alzheimer.',
        'So start smashing those GRRR! Orcs now. See social media for tips tricks.',
      ],
      playLink: 'http://play2help.unaux.com/games/grrrOrcsGame/',
      isComingSoon: false,
    },
    {
      title: 'FLY!',
      imgSrc: '/images/FLY+UNICEF.webp',
      description: [
        'Can you stop the flying Crazy Rockets to save the world?',
        'If you can, you can help charity UNICEF.',
        'Every point you gain will increase a $ donation to UNICEF.',
        'So start smashing those crazy rockets now. See social media for tips tricks.',
      ],
      playLink: 'http://play2help.unaux.com/games/flyRocketsGame/',
      isComingSoon: false,
    },
    {
      title: 'GO!',
      imgSrc: '/images/GO+KIVA.webp',
      description: [
        'Can you stop the GO! Invaders to save the world?',
        'If you can, you can help charity Kiva.',
        'Every point you gain will increase a $ donation to Kiva.',
        'So start smashing those GO invaders now. See social media for tips tricks.',
      ],
      playLink: 'http://play2help.unaux.com/games/goInvadersGame/',
      isComingSoon: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold">New Games</h3>
        <p className="text-gray-600">These are our new and coming soon games</p>
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
    </div>
  );
};

export default NewGamesSection;
