import axios from 'axios';

/**
 * Retrieves a random solution from the server.
 * @returns A Promise that resolves to an array of strings representing the random solution.
 * @throws If there is an error during the HTTP request or response.
 */
export default async function getRandomSolution() {
  const response = await axios.post(
    'http://localhost:8080/game/startRound',
    'numbers'
  );
  return response.data.solution;
}
