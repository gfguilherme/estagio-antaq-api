const knex = require("../database");

module.exports = {
  async read(req, res, next) {
    const { CDTrigrama } = req.body;
    console.log(req.body);

    try {
      const results = await knex
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
