/**
 * Checks if the element at the specified index in the array is the lowest.
 * @param currentSolution - An array of string elements.
 * @param clickedIndex - The index of the element to check.
 * @returns `true` if the clicked element is the lowest, otherwise `false`.
 */
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
