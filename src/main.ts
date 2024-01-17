import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  return res.send('Postman Power!');
});

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});
