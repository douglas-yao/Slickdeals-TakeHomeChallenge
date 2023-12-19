class GameManagementService {
  generateRoundSolution(): string[] {
    const isNumber = Math.random() < 0.5;

    if (isNumber) {
      const randomNumbers = this.generateRandomNumbers();
      console.log('Random Numbers:', randomNumbers);
      return randomNumbers;
    } else {
      const randomLetters = this.generateRandomLetters();
      console.log('Random Letters:', randomLetters);
      return randomLetters;
    }
  }

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
