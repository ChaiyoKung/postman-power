import { NextFunction, Request, Response } from 'express';
import { verifyJwt } from '../libs/jwt';

export function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Missing Authorization Header' });
  }

  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access token missing' });
  }

  try {
    verifyJwt(token);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid access token' });
  }
}
