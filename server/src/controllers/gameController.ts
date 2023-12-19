import { NextFunction, Request, Response } from 'express';
import gameManagementService from '../services/gameManagementService';

/**
 * Controller for game-related routes.
 */
const gameController = {
  /**
   * Starts a new round.
   * @param req - The request object.
   * @param res - The response object.
   */
  startRound: async (req: Request, res: Response) => {
    try {
      const solution = gameManagementService.generateRoundSolution();

      res.status(200).send({ solution });
    } catch (err) {
      console.error('Error starting the game:', err);
      res.status(400).send('Internal Server Error');
    }
  },
};

export default gameController;
