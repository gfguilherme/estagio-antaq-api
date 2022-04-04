const express = require("express");
const routes = express.Router();

const PortosController = require("./controllers/PortosController");

routes.get("/", (req, res) => {
  try {
    res.json({ message: "Tudo certo!" });
  } catch (error) {
    next(error);
  }
});
routes.get("/api/portos", PortosController.read);

module.exports = routes;
