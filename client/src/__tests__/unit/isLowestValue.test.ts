import isLowestValue from '../../utils/isLowestValue';

describe('isLowestValue', () => {
  it('returns true when clicked element is the lowest in the current solution', () => {
    const currentSolution = ['5', '8', '3', '2'];
    const clickedIndex = 3;

    const result = isLowestValue(currentSolution, clickedIndex);

    expect(result).toBe(true);
  });

  it('returns false when clicked element is not the lowest in the current solution', () => {
    const currentSolution = ['5', '8', '3', '2'];
    const clickedIndex = 1;

    const result = isLowestValue(currentSolution, clickedIndex);

    expect(result).toBe(false);
  });
});
