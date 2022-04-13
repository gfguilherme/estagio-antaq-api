const { arrendamentoV2DB } = require("../database");

module.exports = {
  async listByPorto(req, res, next) {
    const { CDTrigrama } = req.params;

    try {
      const results = await arrendamentoV2DB
        .select('IDContratoArrendamento', 'CDContrato')
        .from("TBContratoArrendamento")
        .where({
          CDTrigrama,
          "NRVersao": 1
        });

      res.json(results);
    } catch (error) {
      next(error);
    }
  },
};
