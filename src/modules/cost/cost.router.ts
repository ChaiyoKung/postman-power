import express, { Request, Response } from 'express';
import { costs } from './cost.db';

const router = express.Router();

/**
 * Get All Costs
 */
router.get('/', (_req: Request, res: Response) => {
  return res.json(costs);
});

export default router;
