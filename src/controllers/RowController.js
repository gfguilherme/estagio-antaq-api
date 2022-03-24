const googleAuth = require('../googleAuth');
const getProcessData = require('../utils/process');

module.exports = {
  async read(req, res, next) {
    try {
      const { processNumber } = req.params;

      const data = await googleAuth.getRows();

      const GoogleSpreadsheetRow = data.filter(
        (GoogleSpreadsheetRow) =>
          GoogleSpreadsheetRow['Número do Processo'] === processNumber
      )[0];

      delete GoogleSpreadsheetRow['_sheet'];

      const rowData = getProcessData(GoogleSpreadsheetRow);

      res.json(rowData);
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { processNumber } = req.params;

      const data = await googleAuth.getRows();

      let row = data.filter(
        (row) => row['Número do Processo'] === processNumber
      )[0];

      await row.delete();

      return res.sendStatus(204);
    } catch (error) {
      return next(error);
    }
  },
};
