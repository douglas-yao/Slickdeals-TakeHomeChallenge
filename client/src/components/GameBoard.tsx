import Row from './Row';
import useGame from '../hooks/useGame';

export default function GameBoard() {
  const {
    currentSolution,
    score,
    timeRemaining,
    isLoading,
    startNewGame,
    handleTileClick,
  } = useGame();

  if (isLoading) return <span>Loading...</span>;

  return (
    <div className="flex flex-col items-center gap-5">
      <h1>GameBoard</h1>
      <button onClick={startNewGame}>New Game</button>
      <div className="flex gap-10 items-center">
        <Row
          currentSolution={currentSolution}
          handleTileClick={handleTileClick}
        />
        <span>Score: {score}</span>
        <span>Time Remaining: {timeRemaining}</span>
      </div>
    </div>
  );
}
