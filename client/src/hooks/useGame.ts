import { useState } from 'react';
import { isLowestValue, getRandomSolution } from '../utils/index';
import useGameTimer from './useGameTimer';

type UseGame = {
  currentSolution: string[];
  score: number;
  timeRemaining: number;
  isLoading: boolean;
  startNewGame: () => Promise<void>;
  handleTileClick: (clickedIndex: number) => void;
};

const useGame: () => UseGame = () => {
  const [currentSolution, setCurrentSolution] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { restartTimer, timeRemaining } = useGameTimer(60, handleTimeout);

  const startNewGame = async (): Promise<void> => {
    await startNewRound();
    setScore(0);
  };

  const startNewRound = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const randomSolution = await getRandomSolution();
      setCurrentSolution(randomSolution);
      restartTimer();
    } catch (error) {
      console.error('Error fetching random solution:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTileClick = (clickedIndex: number): void => {
    if (isLowestValue(currentSolution, clickedIndex)) {
      const updatedSolution = [...currentSolution];
      updatedSolution.splice(clickedIndex, 1);
      setCurrentSolution(updatedSolution);

      if (currentSolution.length === 1) {
        setScore((prevScore) => prevScore + 8);
        startNewRound();
      } else {
        setScore((prevScore) => prevScore + 5);
      }
    } else {
      startNewRound();
    }
  };

  function handleTimeout(): void {
    startNewRound();
    restartTimer();
  }

  return {
    currentSolution,
    score,
    timeRemaining,
    isLoading,
    startNewGame,
    handleTileClick,
  };
};

export default useGame;
