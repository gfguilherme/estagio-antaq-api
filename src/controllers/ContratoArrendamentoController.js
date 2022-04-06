const { arrendamentoV2DB } = require("../database");

module.exports = {
  async read(req, res, next) {
    const { CDTrigrama } = req.body;

    try {
      const results = await arrendamentoV2DB
        .select("IDContratoArrendamento")
        .from("TBContratoArrendamento")
        .where({
          CDTrigrama,
        });

      res.json(results);
    } catch (error) {
      next(error);
    }
  },
};
