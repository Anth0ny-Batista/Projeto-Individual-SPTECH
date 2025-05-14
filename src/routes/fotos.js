var express = require("express");
var router = express.Router();

var fotosController = require("../controllers/fotosController");

router.get("/listar", function (req, res) {
  fotosController.listar(req, res);
});

module.exports = router;