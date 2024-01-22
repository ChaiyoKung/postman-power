import { Request, Response, NextFunction } from 'express';

const API_KEY = 'tWDzNr14DN4R7Rsy'; // NOT DO THIS IN PRODUCTION!

export function apiKeyMiddleware(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.headers['api-key'];

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ message: 'Invalid API key' });
  }

  next();
}
