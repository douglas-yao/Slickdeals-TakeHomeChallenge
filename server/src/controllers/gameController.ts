import { NextFunction, Request, Response } from 'express';
import gameManagementService from '../services/gameManagementService';

const gameController = {
  startRound: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { mode } = req.body;
      console.log(mode);
      const solution = gameManagementService.generateRoundSolution(mode);

      res.status(200).send({ solution });
    } catch (err) {
      console.error('Error starting the game:', err);
      res.status(400).send('Internal Server Error');
    }
  },
};

export default gameController;
