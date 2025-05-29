var express = require("express");
var router = express.Router();

var curtidaController = require("../controllers/curtidaController");

router.post("/curtir/:idUsuario", function (req, res) {
    curtidaController.curtir(req, res);
});

router.delete("/descurtir/:idUsuario", function (req, res) {
    curtidaController.descurtir(req, res);
});

router.get(`/verificarCurtida/:idUsuario/:idFoto`, function (req, res) {
    curtidaController.verificarCurtida(req, res);
});

router.post("/favoritar/:idUsuario", function (req, res) {
    curtidaController.favoritar(req, res);
});

router.delete("/desfavoritar/:idUsuario", function (req, res) {
    curtidaController.desfavoritar(req, res);
});

router.get(`/verificarFavorito/:idUsuario/:idFoto`, function (req, res) {
    curtidaController.verificarFavorito(req, res);
});

module.exports = router;