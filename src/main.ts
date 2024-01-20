import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './modules/user/user.router';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (_req: Request, res: Response) => {
  return res.send('Postman Power!');
});

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});
