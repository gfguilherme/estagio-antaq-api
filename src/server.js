const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// Not Found error middleware
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  return next(error);
});

// Catch all errors middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
  console.log(error);
});

app.listen(3333, () => console.log('>>Servidor iniciado<<'));
