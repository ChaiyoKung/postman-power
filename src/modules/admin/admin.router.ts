import { faker } from '@faker-js/faker';
import express, { Request, Response } from 'express';

const router = express.Router();

/**
 * Admin Dashboard
 */
router.get('/dashboard', (_req: Request, res: Response) => {
  const install = faker.number.int({ min: 100, max: 1000 });
  const uninstall = faker.number.int({ max: install });

  return res.json({
    like: faker.number.int({ max: install }),
    activeUser: faker.number.int({ max: install - uninstall }),
    install: install,
    uninstall: uninstall,
  });
});

export default router;
