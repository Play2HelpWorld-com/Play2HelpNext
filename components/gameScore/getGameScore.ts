import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { SendGameScore } from './sendGameScore';

interface GameEndData {
  score: number;
}

export const GetGameScore = () => {
  useEffect(() => {
    console.log('I am in the GetGameScore function');
    const newSocket = io(process.env.NEXT_PUBLIC_GAME_SERVER_URI, {
      transports: ['websocket'], 
    });
    // Listen for the 'game-end' event
    newSocket.on('game_end', (data: GameEndData) => {
      console.log('Game ended. Received score:', data.score);
      SendGameScore(data.score);
    });
    return () => {
      newSocket.disconnect();
    };
  }, []);
};
