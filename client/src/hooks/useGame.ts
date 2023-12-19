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

/**
 * A custom hook for managing game-related logic.
 * @returns An object containing the game-related values and functions.
 */
const useGame: () => UseGame = () => {
  const [currentSolution, setCurrentSolution] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { restartTimer, timeRemaining } = useGameTimer(60, handleTimeout);

  /**
   * Initiates a new game round.
   * @returns A promise that resolves when the new game round is started.
   */
  const startNewGame = async (): Promise<void> => {
    await startNewRound();
    setScore(0);
  };

  /**
   * Initiates a new game round and updates the game state accordingly.
   * @returns A promise that resolves when the new game round is started.
   */
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

  /**
   * Handles the click event on a game tile.
   * @param clickedIndex - The index of the clicked game tile.
   */
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

  /**
   * Handles the timeout event of the game timer.
   */
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
