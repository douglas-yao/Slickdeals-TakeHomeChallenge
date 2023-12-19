class GameManagementService {
  generateRoundSolution(mode = 'numbers', min = -100, max = 100): string[] {
    const randomNumbers = new Set<string>();

    while (randomNumbers.size < 7) {
      let randomNumber = (
        Math.floor(Math.random() * (max - min + 1)) + min
      ).toString();
      randomNumbers.add(randomNumber);
    }

    return Array.from(randomNumbers);
  }
}

const gameManagementService = new GameManagementService();
export default gameManagementService;
