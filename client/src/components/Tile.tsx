type TileProps = {
  solutionElem: string;
  onClick: () => void;
};

export default function Tile({ solutionElem, onClick }: TileProps) {
  return (
    <div onClick={onClick}>
      <span>{solutionElem}</span>
    </div>
  );
}
