import Row from './Row';
import useGame from '../hooks/useGame';

/**
 * GameBoard component represents the main game interface.
 * It displays the current game state, allows users to start a new game,
 * and interact with the game tiles.
 */
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
    <div className="flex flex-col items-center gap-10">
      <h1>POP!</h1>
      <div className="flex flex-col items-center">
        <span>Pop out the lowest number or letter.</span>
        <span>
          If the timer expires, or if you pop the wrong tile, the round resets.
        </span>
      </div>
      <button
        className=" bg-blue-500 text-gray-200 px-4 py-2 rounded-md transition duration-300 hover:bg-blue-400"
        onClick={startNewGame}
      >
        New Game
      </button>
      <div className="flex flex-col gap-5 items-center">
        <Row
          currentSolution={currentSolution}
          handleTileClick={handleTileClick}
        />
        <div className="flex flex-col gap-2 items-center">
          <span>Score: {score}</span>
          <span>Time Remaining: {timeRemaining}</span>
        </div>
      </div>
    </div>
  );
}
