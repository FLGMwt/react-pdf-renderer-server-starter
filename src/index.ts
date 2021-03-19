import express from 'express';
import { getPdfStream } from './makePdf';

const app = express();
const port = 8080 || process.env.PORT;

app.get('/', async (_req, res) => {
  const response = await getPdfStream();
  response.pipe(res);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
