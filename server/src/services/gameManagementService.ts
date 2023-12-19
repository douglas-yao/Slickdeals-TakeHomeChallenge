class GameManagementService {
  generateRoundSolution(mode = 'numbers', min = -100, max = 100) {
    if (mode === 'numbers') {
      const randomNumbers = new Set();

      while (randomNumbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.add(randomNumber);
      }

      return Array.from(randomNumbers);
    }
  }
}

const gameManagementService = new GameManagementService();
export default gameManagementService;
