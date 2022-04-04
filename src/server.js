const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// Not Found error middleware
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  return next(error);
});

// Catch all errors middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
  console.log(error);
});

app.listen(3000, () => console.log("Servidor iniciado"));
