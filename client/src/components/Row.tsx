import Tile from './Tile';

/**
 * Row component represents a row of tiles in the game.
 * It renders individual tiles based on the provided current solution
 * and handles tile click events.
 *
 * @component
 * @param {string[]} props.currentSolution - The array of elements to be displayed as tiles in the row.
 * @param {Function} props.handleTileClick - The callback function to handle tile click events.
 */
type RowProps = {
  currentSolution: string[];
  handleTileClick: (index: number) => void;
};

export default function Row({ currentSolution, handleTileClick }: RowProps) {
  return (
    <div>
      <div className="flex gap-5">
        {currentSolution.map((solutionElem, i) => (
          <Tile
            key={i}
            solutionElem={solutionElem}
            onClick={() => handleTileClick(i)}
          />
        ))}
      </div>
    </div>
  );
}
