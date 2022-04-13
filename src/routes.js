const express = require("express");
const routes = express.Router();
const PortosController = require("./controllers/PortosController");
const ControleREIDIController = require("./controllers/ControleREIDIController");
const AnaliseREIDIController = require("./controllers/AnaliseREIDIController");
const ControleREIDISemVinculoController = require("./controllers/ControleREIDISemVinculoController");
const EstadoAnaliseREIDIController = require("./controllers/EstadoAnaliseREIDIController");
const ManifestacaoAntaqController = require("./controllers/ManifestacaoANTAQController");
const EstadoManifestacaoAntaqController = require("./controllers/EstadoManifestacaoANTAQController");
const { route } = require("express/lib/application");
const ContratoArrendamentoController = require("./controllers/ContratoArrendamentoController");

routes.get("/", (req, res) => {
  try {
    res.json({ message: "Tudo certo!" });
  } catch (error) {
    next(error);
  }
});

routes.get("/api/portos", PortosController.read);
routes.get(
  "/api/contratoarrendamento/:CDTrigrama",
  ContratoArrendamentoController.listByPorto
);

routes.get("/api/controlereidi", ControleREIDIController.read);
routes.post("/api/controlereidi", ControleREIDIController.create);
routes.delete("/api/controlereidi/:IDControleREIDI", ControleREIDIController.delete);


routes.get("/api/analisereidi", AnaliseREIDIController.read);
routes.get(
  "/api/controlereidisemvinculo",
  ControleREIDISemVinculoController.read
);
routes.get("/api/estadoanalisereidi", EstadoAnaliseREIDIController.read);
routes.get("/api/manifestacaoantaq", ManifestacaoAntaqController.read);
routes.get(
  "/api/estadomanifestacaoantaq",
  EstadoManifestacaoAntaqController.read
);

module.exports = routes;
