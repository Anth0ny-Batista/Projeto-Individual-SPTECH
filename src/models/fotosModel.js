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


function listaFavorito(idUsuario) {
  console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function descurtir(): ", idUsuario);
  var instrucaoSql = `
       select f.idFoto, f.caminhoFoto, f.fkCategoria, fa.fkUsuario from foto f 
            join favorito fa
            on f.idFoto = fa.fkFoto
            where fa.fkUsuario = ${idUsuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function topFotos() {
  var instrucaoSql = `
       select count(f.idFoto) as contagemCurtidas, f.caminhoFoto, f.fkCategoria from foto f 
                join curtida c
                on f.idFoto = c.fkFoto
                group by f.caminhoFoto, f.fkCategoria 
                order by contagemCurtidas desc;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function fotosPorCategoria() {
  var instrucaoSql = `
       select count(f.idFoto) as contagemCurtidas, ca.nomeCategoria from foto f 
          join curtida c
          on f.idFoto = c.fkFoto
          join categoriaFoto ca
          on f.fkCategoria = ca.idCategoria
          group by f.fkCategoria 
          order by contagemCurtidas desc;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function fotoMaisCurtida() {
  var instrucaoSql = `
       select count(f.idFoto) as contagemCurtidas, f.caminhoFoto, f.fkCategoria from foto f 
          join curtida c
          on f.idFoto = c.fkFoto
          group by f.caminhoFoto, f.fkCategoria 
          order by contagemCurtidas desc limit 1;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function fotoMaisFavoritada() {
  var instrucaoSql = `
       select count(f.idFoto) as contagemfavoritos, f.caminhoFoto, f.fkCategoria from foto f 
            join favorito fa
            on f.idFoto = fa.fkFoto
            group by f.caminhoFoto, f.fkCategoria 
            order by contagemfavoritos desc limit 1;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function indicadorCurtida() {
  var instrucaoSql = `
       select count(f.idFoto) as contagemCurtidas from foto f 
          join curtida c
          on f.idFoto = c.fkFoto;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function indicadorFavorito() {
  var instrucaoSql = `
       select count(f.idFoto) as contagemFavoritos from foto f 
          join favorito fa
          on f.idFoto = fa.fkFoto;
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
  listaCurtidas,
  listaFavorito,
  topFotos,
  fotosPorCategoria,
  fotoMaisCurtida,
  fotoMaisFavoritada,
  indicadorCurtida,
  indicadorFavorito
}