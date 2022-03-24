const express = require('express');
const ProcessController = require('./controllers/ProcessController');
const RowController = require('./controllers/RowController');

// Controllers
const SpreadsheetController = require('./controllers/SpreadsheetController');

const routes = express.Router();

// Spreadsheet routes
routes.post('/api/spreadsheet', SpreadsheetController.create);
routes.get('/api/spreadsheet', SpreadsheetController.read);
routes.put('/api/spreadsheet/:id', SpreadsheetController.update);

routes.get('/api/match-rows', ProcessController.read);

// Row routes
routes.get('/api/row/:processNumber', RowController.read);
routes.delete('/api/row/:processNumber', RowController.delete);
module.exports = routes;
