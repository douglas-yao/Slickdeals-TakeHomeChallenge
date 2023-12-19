import { useState, useEffect } from 'react';
import axios from 'axios';
import Row from './Row';

export default function GameBoard() {
  const [currentSolution, setCurrentSolution] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (currentSolution.length === 0) {
      getRandomSolution();
    }
  }, [currentSolution]);

  // Wrap into a hook
  async function getRandomSolution(): Promise<void> {
    setIsLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:8080/game/startRound',
        'numbers'
      );
      console.log('response.data:', response.data);
      setCurrentSolution(response.data.solution);
    } catch (error) {
      console.error('Error fetching random solution:', error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleTileClick(index: number): void {
    const lowestElement = getLowestElement(currentSolution);
    const clickedElement = currentSolution[index];

    if (clickedElement === lowestElement) {
      const updatedSolution = [...currentSolution];

      updatedSolution.splice(index, 1);
      setCurrentSolution(updatedSolution);
      currentSolution.length === 1
        ? setScore((prevScore) => prevScore + 8)
        : setScore((prevScore) => prevScore + 5);
    } else {
      getRandomSolution();
    }
  }

  function getLowestElement(
    values: string[],
    mode: string = 'numbers'
  ): string {
    if (mode === 'numbers') {
      return Math.min(...values.map((value) => parseInt(value))).toString();
    }
  }

  if (isLoading) return <span>Loading...</span>;

  return (
    <div className="flex flex-col items-center gap-5">
      <h1>GameBoard</h1>
      <button onClick={getRandomSolution}>New Game</button>
      <div className="flex gap-10">
        <Row
          currentSolution={currentSolution}
          handleTileClick={handleTileClick}
        />
        <span>Score: {score}</span>
      </div>
    </div>
  );
}
