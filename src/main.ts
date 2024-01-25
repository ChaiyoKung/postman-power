import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './modules/user/user.router';
import costRouter from './modules/cost/cost.router';
import { apiKeyMiddleware } from './middlewares/api-key.middleware';
import adminRouter from './modules/admin/admin.router';
import { jwtMiddleware } from './middlewares/jwt.middleware';
import authRouter from './modules/auth/auth.router';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (_req: Request, res: Response) => {
  return res.send('Postman Power!');
});

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/costs', apiKeyMiddleware, costRouter);
app.use('/admin', jwtMiddleware, adminRouter);

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});
