import { Trophy, GamepadIcon, Rocket, Map, Train, Car, Puzzle, Circle, Candy } from 'lucide-react';

export const getGameIcon = (gameName: string) => {
  const iconClassName = "w-10 h-10 text-gray-500";
  const gameIcons: { [key: string]: React.ReactNode } = {
    'snakeGame': <GamepadIcon className={iconClassName} />,
    'spaceShotter': <Rocket className={iconClassName} />,
    'zoomLand': <Map className={iconClassName} />,
    'Rail Rush': <Train className={iconClassName} />,
    'carGame': <Car className={iconClassName} />,
    'MarioGo': <Trophy className={iconClassName} />,
    'tetris': <Puzzle className={iconClassName} />,
    'bubble': <Circle className={iconClassName} />,
    'yum': <Candy className={iconClassName} />,
    'default': <GamepadIcon className={iconClassName} />
  };

  return gameIcons[gameName] || gameIcons['default'];
};