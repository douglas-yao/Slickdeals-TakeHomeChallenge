import { useState } from 'react';
import getRandomSolution from '../utils/getRandomSolution';
import useGameTimer from './useGameTimer'; // assuming you have this file

const useGame = () => {
  const [currentSolution, setCurrentSolution] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { restartTimer, timeRemaining } = useGameTimer(60, handleTimeout);

  const startNewGame = async () => {
    await startNewRound();
    setScore(0);
  };

  const startNewRound = async () => {
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

  const handleTileClick = (index: number) => {
    const lowestElement = Math.min(
      ...currentSolution.map((value) => parseInt(value))
    ).toString();
    const clickedElement = currentSolution[index];

    if (clickedElement === lowestElement) {
      const updatedSolution = [...currentSolution];
      updatedSolution.splice(index, 1);
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

  function handleTimeout() {
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
