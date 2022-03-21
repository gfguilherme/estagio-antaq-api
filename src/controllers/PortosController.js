const knex = require('../database');

module.exports = {
  async read(req, res, next) {
    try {
      const results = await knex('TBPorto');

      res.json(results);
    } catch (error) {}
  },
};
5;
