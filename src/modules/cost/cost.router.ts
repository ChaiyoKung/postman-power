import express, { Request, Response } from 'express';
import { costs } from './cost.db';
import { Aggregate, Cost } from './cost.types';

const router = express.Router();

/**
 * Get All Costs
 */
router.get('/', (_req: Request, res: Response) => {
  return res.json(costs);
});

/**
 * Query Costs
 */
router.get('/query', (req: Request, res: Response) => {
  const _aggregate = req.query.aggregate;
  if (_aggregate === undefined) {
    return res.status(400).send({ message: 'The "aggregate" parameter is missing in the request' });
  }

  if (typeof _aggregate !== 'string') {
    return res.status(400).send({ message: 'The "aggregate" parameter must be a string' });
  }

  let aggregate: Aggregate<Cost> = {};
  try {
    aggregate = JSON.parse(_aggregate);
  } catch (error) {
    return res.status(400).send({ message: 'Invalid JSON format in the "aggregate" parameter' });
  }

  let aggregatedCosts = [...costs];

  if (aggregate.filter) {
    for (const key in aggregate.filter) {
      if (Object.prototype.hasOwnProperty.call(aggregate.filter, key)) {
        const value = aggregate.filter[key as keyof Cost];
        aggregatedCosts = aggregatedCosts.filter((cost) => cost[key as keyof Cost] === value);
      }
    }
  }

  return res.json(aggregatedCosts);
});

export default router;
