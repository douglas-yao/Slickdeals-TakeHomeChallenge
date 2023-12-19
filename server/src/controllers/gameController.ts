import { NextFunction, Request, Response } from 'express';

const gameController = {
  startRound: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      console.log(body);
      res.send('Hello World!');
    } catch (err) {
      console.error('Error starting the game:', err);
      res.status(400).send('Internal Server Error');
    }
  },
};

export default gameController;
