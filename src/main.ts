import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (_req: Request, res: Response) => {
  return res.send('Postman Power!');
});

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});
