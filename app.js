
import express from 'express';
import cors from 'cors';

import bodyParser from 'body-parser';
app.use(bodyParser.json({limit: '30mb',extended:true}));

const app = express();
app.use(cors());



const PORT = process.env.PORT|| 5000;

  


app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello'
  });
});

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Not Found'
  });
});

export default app;
