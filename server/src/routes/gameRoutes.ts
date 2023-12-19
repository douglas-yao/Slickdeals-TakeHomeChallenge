import express, { Request, Response } from 'express';
import gameController from '../controllers/gameController';

const router = express.Router();

router.post('/startRound', gameController.startRound);

export default router;
