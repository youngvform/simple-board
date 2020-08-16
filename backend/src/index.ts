import express from 'express';
import api from './api';

const app = express();
const port = process.env.PORT || 4000;

app.use('/api', api);

app.get('/', (req, res) => {
  return res.send('hello world!!!!');
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
