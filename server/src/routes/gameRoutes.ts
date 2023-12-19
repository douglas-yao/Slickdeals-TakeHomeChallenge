import express, { Request, Response } from 'express';
import gameController from '../controllers/gameController';

const router = express.Router();

// Route to start a new round
router.post('/startRound', gameController.startRound);

export default router;
