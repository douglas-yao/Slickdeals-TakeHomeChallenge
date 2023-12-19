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
