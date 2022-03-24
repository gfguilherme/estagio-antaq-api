const googleAuth = require('../googleAuth');

module.exports = {
  async read(req, res, next) {
    try {
      const rows = await googleAuth.getRows();

      const rowsProcessNumbers = rows.map(
        (element) => element['Número do Processo']
      );

      return res.json({ rowsProcessNumbers });
    } catch (error) {
      next(error);
    }
  },
};
