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

  async create(req, res, next){
    try {
      const { IDControleREIDI,
        IDContratoArrendamento,
        NRProcessoPrincipal,
        IDProtocoloSEI,
        DTProtocoloPedido,
        VLInvestimentoProposto,
        DSObservacoesSituacao,
        NRProtocoloMINFRA,
        NRCodigoMINFRA } = req.body

      await extensaoControleDB('TBControleREIDI').insert({
        IDControleREIDI,
        IDContratoArrendamento,
        NRProcessoPrincipal,
        IDProtocoloSEI,
        DTProtocoloPedido,
        VLInvestimentoProposto,
        DSObservacoesSituacao,
        NRProtocoloMINFRA,
        NRCodigoMINFRA,
      })

    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next){
    try {
      const { IDControleREIDI } = req.params;

      await extensaoControleDB("TBControleREIDI")
      .where({IDControleREIDI})
      .del();

      res.send();
    } catch (error) {
      next(error);
    }
  }
};
