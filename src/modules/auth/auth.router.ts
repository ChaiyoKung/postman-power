import express, { Request, Response } from 'express';
import { signJwt } from '../../libs/jwt';

const USERNAME = 'admin'; // NOT DO THIS IN PRODUCTION!
const PASSWORD = '1234'; // NOT DO THIS IN PRODUCTION!

const router = express.Router();

/**
 * Login
 */
router.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  const isFoundUser: boolean = username === USERNAME && password === PASSWORD;

  if (!isFoundUser) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const user = { username: USERNAME };
  const accessToken = signJwt(user, { expiresIn: '30s' });

  return res.json({ data: user, accessToken });
});

export default router;
