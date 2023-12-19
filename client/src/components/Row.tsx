import Tile from './Tile';

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
