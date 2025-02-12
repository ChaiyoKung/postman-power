import express, { Request, Response } from 'express';
import { users } from './user.db';
import { User } from './user.types';
import { faker } from '@faker-js/faker';

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

/**
 * Create User
 */
router.post('/', (req: Request, res: Response) => {
  const newUser: User = {
    id: faker.string.uuid(),
    name: req.body.name,
    email: req.body.email,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  users.push(newUser);

  return res.status(201).json(newUser);
});

/**
 * Update User
 */
router.put('/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  const updatedUser: User = {
    ...users[userIndex],
    name: req.body.name || users[userIndex].name,
    updatedAt: new Date(),
  };

  users[userIndex] = updatedUser;

  return res.json(updatedUser);
});

/**
 * Delete User
 */
router.delete('/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users.splice(userIndex, 1);

  return res.status(204).send();
});

export default router;
