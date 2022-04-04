const knex = require('../database');

module.exports = {
  async read(req, res, next) {
    try {
      const results = await knex
        .select('CDBiGrama', 'CDTriGrama', 'NOPorto')
        .from('TBPorto')
        .where({
          CDBiGrama: 'BR',
          TPPORTO: '1',
        });

      res.json(results);
    } catch (error) {
      next(error);
    }
  },
};
