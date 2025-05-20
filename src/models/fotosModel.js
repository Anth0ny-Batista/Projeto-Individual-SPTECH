var database = require("../database/config");

function listar() {
  var instrucaoSql = `SELECT idFoto, caminhoFoto, fkCategoria FROM foto`;

  return database.executar(instrucaoSql);
}

function aleatorioCasamento() {
  var instrucaoSql = `SELECT idFoto, caminhoFoto, fkCategoria FROM foto WHERE fkCategoria = 1`;

  return database.executar(instrucaoSql);
}

function aleatorioPreWedding() {
  var instrucaoSql = `SELECT idFoto, caminhoFoto, fkCategoria FROM foto WHERE fkCategoria = 2`;

  return database.executar(instrucaoSql);
}

function listaCasamento() {
  var instrucaoSql = `SELECT idFoto, caminhoFoto, fkCategoria FROM foto WHERE fkCategoria = 1`;

  return database.executar(instrucaoSql);
}

function listaPreWedding() {
  var instrucaoSql = `SELECT idFoto, caminhoFoto, fkCategoria FROM foto WHERE fkCategoria = 2`;

  return database.executar(instrucaoSql);
}

function listaCurtidas(idUsuario) {
  console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function descurtir(): ", idUsuario);
  var instrucaoSql = `
       select f.idFoto, f.caminhoFoto, f.fkCategoria from foto f 
	            join curtida c
              on f.idFoto = c.fkFoto
              where c.fkUsuario = ${idUsuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  listar,
  aleatorioCasamento,
  aleatorioPreWedding,
  listaCasamento,
  listaPreWedding,
  listaCurtidas
}