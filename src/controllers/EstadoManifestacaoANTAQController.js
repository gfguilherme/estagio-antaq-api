const { extensaoControleDB } = require("../database");

module.exports = {
  async read(req, res, next) {
    try {
      const results = await extensaoControleDB("TBEstadoManifestacaoANTAQ");

      res.json(results);
    } catch (error) {}
  },
};
