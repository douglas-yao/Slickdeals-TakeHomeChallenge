// GameManagementService.test.ts
import gameManagementService from '../services/gameManagementService';

describe('GameManagementService', () => {
  describe('generateRoundSolution', () => {
    it('generates an array of 7 unique numbers within the specified range', () => {
      const min = -100;
      const max = 100;

      const result: string[] = gameManagementService.generateRoundSolution();

      expect(result).toHaveLength(7);
      expect(new Set(result).size).toBe(7);
      result.forEach((number) => {
        const parsedNumber = parseInt(number, 10);
        expect(parsedNumber).toBeGreaterThanOrEqual(min);
        expect(parsedNumber).toBeLessThanOrEqual(max);
      });
    });
  });
});
