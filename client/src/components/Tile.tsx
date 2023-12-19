/**
 * Tile component represents an individual tile in the game.
 * It displays the provided solution element and handles click events.
 *
 * @component
 * @param {string} props.solutionElem - The element to be displayed in the tile.
 * @param {Function} props.onClick - The callback function to handle tile click events.
 */
type TileProps = {
  solutionElem: string;
  onClick: () => void;
};

export default function Tile({ solutionElem, onClick }: TileProps) {
  return (
    <div
      className="cursor-pointer border rounded p-2 shadow-md "
      onClick={onClick}
    >
      <span>{solutionElem}</span>
    </div>
  );
}
