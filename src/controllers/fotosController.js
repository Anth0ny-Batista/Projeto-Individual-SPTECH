var fotosModel = require("../models/fotosModel");

function listar(req, res) {
  fotosModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function aleatorioCasamento(req, res) {
  fotosModel.aleatorioCasamento().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function aleatorioPreWedding(req, res) {
  fotosModel.aleatorioPreWedding().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listaCasamento(req, res) {
  fotosModel.listaCasamento().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listaPreWedding(req, res) {
  fotosModel.listaPreWedding().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listaCurtidas(req, res) {
  var idUsuario = req.params.idUsuario;
  fotosModel.listaCurtidas(idUsuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}
module.exports = {
    listar,
    aleatorioCasamento,
    aleatorioPreWedding,
    listaCasamento,
    listaPreWedding,
    listaCurtidas
}