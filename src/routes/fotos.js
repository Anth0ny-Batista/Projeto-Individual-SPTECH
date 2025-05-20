var express = require("express");
var router = express.Router();

var fotosController = require("../controllers/fotosController");

router.get("/listar", function (req, res) {
  fotosController.listar(req, res);
});

router.get("/aleatorioCasamento", function (req, res) {
  fotosController.aleatorioCasamento(req, res);
});

router.get("/aleatorioPreWedding", function (req, res) {
  fotosController.aleatorioPreWedding(req, res);
});

router.get("/listaCasamento", function (req, res) {
  fotosController.listaCasamento(req, res);
});

router.get("/listaPreWedding", function (req, res) {
  fotosController.listaPreWedding(req, res);
});

router.get("/listaCurtidas/:idUsuario", function (req, res) {
  fotosController.listaCurtidas(req, res);
});

module.exports = router;