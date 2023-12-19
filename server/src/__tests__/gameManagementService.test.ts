import gameManagementService from '../services/gameManagementService';

describe('GameManagementService', () => {
  describe('generateRandomNumbers', () => {
    it('should generate an array of random numbers within the specified range', () => {
      const result = gameManagementService.generateRandomNumbers(-50, 50);
      expect(result).toHaveLength(7);
      expect(result.every((num) => !isNaN(parseInt(num)))).toBe(true);
    });
  });

  describe('generateRandomLetters', () => {
    it('should generate an array of random letters', () => {
      const result = gameManagementService.generateRandomLetters();
      expect(result).toHaveLength(7);
      expect(result.every((letter) => /^[A-Z]$/.test(letter))).toBe(true);
    });
  });
});
