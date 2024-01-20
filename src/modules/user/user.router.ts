import express, { Request, Response } from 'express';
import { users } from './user.db';

const router = express.Router();

/**
 * Get All Users
 */
router.get('/', (req: Request, res: Response) => {
  const pageNo = Number(req.query.pageNo) || 1;
  const pageSize = Number(req.query.pageSize) || 5;

  const startIndex = (pageNo - 1) * pageSize;
  const endIndex = pageNo * pageSize;

  const paginatedUsers = users.slice(startIndex, endIndex);
  const totalPages = Math.ceil(users.length / pageSize);

  return res.json({
    data: paginatedUsers,
    pageNo: pageNo,
    pageSize: pageSize,
    totalPages: totalPages,
  });
});

/**
 * Get User
 */
router.get('/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.json(user);
});

export default router;
