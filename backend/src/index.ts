import express, { NextFunction } from 'express';

const app = express();
const port = process.env.PORT || 4000;

function myLogger(req: any, res: any, next: any) {
  console.log('LOGGED');
  next();
}

app.get('/', (req, res) => {
  console.log('routing1');
  res.send('hello world!!!!');
});

app.use(myLogger);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
