const express = require('express');
const routes = express.Router();

const PortosController = require('./controllers/PortosController');

routes.get('/api/portos', PortosController.read);

module.exports = routes;
