import axios from 'axios';

export default async function getRandomSolution() {
  const response = await axios.post(
    'http://localhost:8080/game/startRound',
    'numbers'
  );
  return response.data.solution;
}
