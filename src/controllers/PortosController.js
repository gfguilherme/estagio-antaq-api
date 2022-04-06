const outorgaDB = require("../database").outorgaDB;

module.exports = {
  async read(req, res, next) {
    try {
      const results = await outorgaDB
        .select("CDBiGrama", "CDTriGrama", "NOPorto")
        .from("TBPorto")
        .where({
          CDBiGrama: "BR",
          TPPORTO: "1",
        });

      res.json(results);
    } catch (error) {
      next(error);
    }
  },
};
