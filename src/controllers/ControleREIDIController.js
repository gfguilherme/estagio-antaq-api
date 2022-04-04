const knex = require('../database');

module.exports = {
  async read(req, res, next) {
    try {
      const results = await knex('TBControleREIDI');

      res.json(results);
    } catch (error) {
      next(error)
    }
  },
};

