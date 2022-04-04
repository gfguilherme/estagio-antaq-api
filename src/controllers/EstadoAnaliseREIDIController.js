const knex = require('../database');

module.exports = {
  async read(req, res, next) {
    try {
      const results = await knex('TBEstadoAnaliseREIDI');

      res.json(results);
    } catch (error) {}
  },
};

