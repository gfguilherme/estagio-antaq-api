const { extensaoControleDB } = require("../database");

module.exports = {
  async read(req, res, next) {
    try {
      const results = await extensaoControleDB("TBControleREIDI");

      res.json(results);
    } catch (error) {
      next(error);
    }
  },
};
