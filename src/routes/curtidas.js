var express = require("express");
var router = express.Router();

var curtidaController = require("../controllers/curtidaController");

router.post("/curtir/:idUsuario", function (req, res) {
    curtidaController.publicar(req, res);
});


module.exports = router;