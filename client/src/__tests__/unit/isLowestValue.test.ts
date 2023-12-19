import isLowestValue from '../../utils/isLowestValue';

describe('isLowestValue', () => {
  it('should return true if the clicked letter is the lowest in the array', () => {
    const currentSolution = ['c', 'a', 'f', 'd', 'b'];
    const clickedIndex = 1;
    const result = isLowestValue(currentSolution, clickedIndex);
    expect(result).toBe(true);
  });

  it('should return false if the clicked letter is not the lowest in the array', () => {
    const currentSolution = ['c', 'a', 'f', 'd', 'b'];
    const clickedIndex = 2;
    const result = isLowestValue(currentSolution, clickedIndex);
    expect(result).toBe(false);
  });

  it('should return true if the clicked letter is the only letter in the array', () => {
    const currentSolution = ['x'];
    const clickedIndex = 0;
    const result = isLowestValue(currentSolution, clickedIndex);
    expect(result).toBe(true);
  });

  it('should handle an empty array and return false', () => {
    const currentSolution: string[] = [];
    const clickedIndex = 0;
    const result = isLowestValue(currentSolution, clickedIndex);
    expect(result).toBe(false);
  });
});
