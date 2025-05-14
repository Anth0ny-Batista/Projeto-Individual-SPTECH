var fotosModel = require("../models/fotosModel");

function listar(req, res) {
  fotosModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}
module.exports = {
    listar
}