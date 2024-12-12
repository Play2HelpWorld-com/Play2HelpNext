import React, { useEffect, useState } from 'react';
import { AxiosReqInstance } from '../accounts/utils/axiosInstance';
import { ScoreDataInterface } from './interface';
import { Trophy, Star } from 'lucide-react';
import { getGameIcon } from './GameIcon';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';

const ScoreCard = ({ score }: { score: ScoreDataInterface }) => {
  return (
    <div
      className={`
        transform transition-all duration-300 ease-in-out 
        hover:scale-[1.02] hover:shadow-lg
        bg-white rounded-xl shadow-md 
        p-5 flex items-center space-x-4
        border-l-4 ${getGameBorderColor(score.game)}
      `}
    >
      <div className="flex-shrink-0">
        {getGameIcon(score.game)}
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{score.game}</h3>
        <div className="flex items-center space-x-2 mt-1">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <p className="text-gray-600 font-medium">Score: {score.score}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-md font-medium text-gray-600">Reward</p>
        <p className="text-sm font-bold text-blue-600">{score.tokens} Token </p>
      </div>
    </div>
  );
};
const getGameBorderColor = (gameName: string) => {
  const gameColors: { [key: string]: string } = {
    'spaceShotter': 'border-blue-500',
    'zoomLand': 'border-green-500',
    'snakeGame': 'border-purple-500',
    'Rail Rush': 'border-yellow-500',
    'carGame': 'border-red-500',
    'MarioGo': 'border-indigo-500',
    'default': 'border-gray-300'
  };
  return gameColors[gameName] || gameColors['default'];
};


const Score = () => {
  const [scoreData, setScoreData] = useState<ScoreDataInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalTokens, setTotalTokens] = useState<number | null>(null);
  const protectedRoute = AxiosReqInstance();

  const { address, isConnected } = useAccount();

  const HandleClaim = async () => {
    console.log('Claiming Rewards.....');
    const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/users/getUserAndGameInfo/`;
    try {
      const response = await protectedRoute.get(url);
      if (response.status === 200) {
        const { total_tokens } = response.data;
        setTotalTokens(total_tokens);
        if (!isConnected || address === null) {
          toast.info('Please connect your wallet first');
        }
      }
      console.log('total tokens are are', totalTokens);
      console.log('the address is', address);
    } catch (error) {
      console.error('Error while getting userInfo at score.tsx', error);
    }
  }

  const getScore = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/games/getScores/`;
    try {
      const response = await protectedRoute.get(url);
      if (response.status === 200) {
        const sortedScores = response.data.scores.sort((a: ScoreDataInterface, b: ScoreDataInterface) => b.score - a.score);
        setLoading(false);
        setTotalTokens(response.data.total_tokens);
        setScoreData(sortedScores);
      }
    } catch (error) {
      console.error('Error while getting score at score.tsx in Rewards', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getScore();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl p-6 bg-gray-50 rounded-xl">
      <div className="flex items-center justify-center mb-6">
        <Star className="w-8 h-8 text-yellow-500 mr-2" />
        <h2 className="text-3xl font-bold text-gray-800">Your Scores</h2>
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
        <p className="text-lg text-blue-700 font-bold">
          {totalTokens} <span className="text-gray-600 font-medium">Tokens</span>
        </p>
        <button
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
          onClick={HandleClaim}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Claim Rewards
        </button>
      </div>


      {scoreData.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          No scores available yet. Start playing to set your first score!
        </div>
      ) : (
        <div className="space-y-4">
          {scoreData.map((score, index) => (
            <ScoreCard key={index} score={score} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Score;