/**
 * Service for managing game-related functionality.
 */
class GameManagementService {
  /**
   * Generates a round solution, either a set of random numbers or letters.
   * @returns An array containing the generated round solution.
   */
  generateRoundSolution(): string[] {
    const isNumber = Math.random() < 0.5;

    if (isNumber) {
      const randomNumbers = this.generateRandomNumbers();
      return randomNumbers;
    } else {
      const randomLetters = this.generateRandomLetters();
      return randomLetters;
    }
  }

  /**
   * Generates an array of random numbers within the specified range.
   * @param min - The minimum value for the random numbers (default: -100).
   * @param max - The maximum value for the random numbers (default: 100).
   * @returns An array containing the generated random numbers.
   */
  generateRandomNumbers(min: number = -100, max: number = 100): string[] {
    const randomNumbers = new Set<string>();

    while (randomNumbers.size < 7) {
      let randomNumber = (
        Math.floor(Math.random() * (max - min + 1)) + min
      ).toString();
      randomNumbers.add(randomNumber);
    }

    return Array.from(randomNumbers);
  }

  /**
   * Generates an array of random letters.
   * @returns An array containing the generated random letters.
   */
  generateRandomLetters(): string[] {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetters = new Set<string>();

    while (randomLetters.size < 7) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      const randomLetter = alphabet.charAt(randomIndex);
      randomLetters.add(randomLetter);
    }

    return Array.from(randomLetters);
  }
}

const gameManagementService = new GameManagementService();
export default gameManagementService;
