const { extensaoControleDB } = require("../database");

module.exports = {
  async read(req, res, next) {
    try {
      const results = await knex("TBControleREIDISemVinculo");

      res.json(results);
    } catch (error) {}
  },
};
