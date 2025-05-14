var database = require("../database/config");

function listar() {
  var instrucaoSql = `SELECT idFoto, caminhoFoto, fkCategoria FROM foto`;

  return database.executar(instrucaoSql);
}


module.exports = {
    listar
}