export default function isLowestValue(
  currentSolution: string[],
  clickedIndex: number
): boolean {
  const lowestElement = Math.min(
    ...currentSolution.map((value) => value.charCodeAt(0))
  );
  const clickedElement = currentSolution[clickedIndex].charCodeAt(0);
  return clickedElement === lowestElement;
}
