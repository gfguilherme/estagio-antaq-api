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

  async matchRows(req, res, next) {
    try {
      const results = await extensaoControleDB("TBControleREIDI").select(
        "NRProcessoPrincipal"
      );

      res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const {
        IDContratoArrendamento,
        NRProcessoPrincipal,
        IDProtocoloSEI,
        DTProtocoloPedido,
        VLInvestimentoProposto,
        DSObservacoesSituacao,
        NRProtocoloMINFRA,
        NRCodigoMINFRA,
      } = req.body;

      await extensaoControleDB("TBControleREIDI").insert({
        IDContratoArrendamento,
        NRProcessoPrincipal,
        IDProtocoloSEI,
        DTProtocoloPedido,
        VLInvestimentoProposto,
        DSObservacoesSituacao,
        NRProtocoloMINFRA,
        NRCodigoMINFRA,
      });

      res.status(201).json({
        IDContratoArrendamento,
        NRProcessoPrincipal,
        IDProtocoloSEI,
        DTProtocoloPedido,
        VLInvestimentoProposto,
        DSObservacoesSituacao,
        NRProtocoloMINFRA,
        NRCodigoMINFRA,
      });
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { NRProcessoPrincipal } = req.params;

      const response = await extensaoControleDB("TBControleREIDI")
        .where({ NRProcessoPrincipal })
        .del("*");

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { IDControleREIDI } = req.params;
      const {
        DTProtocoloPedido,
        VLInvestimentoProposto,
        DSObservacoesSituacao,
        NRProtocoloMINFRA,
        NRCodigoMINFRA,
      } = req.body;

      await extensaoControleDB("TBControleREIDI")
        .where({ IDControleREIDI })
        .update({
          DTProtocoloPedido,
          VLInvestimentoProposto,
          DSObservacoesSituacao,
          NRProtocoloMINFRA,
          NRCodigoMINFRA,
        });

      res.status(200).json({
        DTProtocoloPedido,
        VLInvestimentoProposto,
        DSObservacoesSituacao,
        NRProtocoloMINFRA,
        NRCodigoMINFRA,
      });
    } catch (error) {
      next(error);
    }
  },
};
