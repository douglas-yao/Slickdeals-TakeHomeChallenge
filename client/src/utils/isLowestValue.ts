export default function isLowestValue(
  currentSolution: string[],
  clickedIndex: number
) {
  const lowestElement = Math.min(
    ...currentSolution.map((value: string) => parseInt(value))
  ).toString();
  const clickedElement = currentSolution[clickedIndex];
  return clickedElement === lowestElement;
}
