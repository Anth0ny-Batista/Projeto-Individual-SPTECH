var lista_fotos = [];
var lista_fotos_agora = [];

function aleatorioCasamento() {

  fetch("/fotos/aleatorioCasamento", {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((fotos) => {
        lista_fotos = fotos;

        console.log("lista_fotos");
        console.log(lista_fotos[0].caminhoFoto);


        while (lista_fotos_agora.length < 10 && lista_fotos_agora.length < lista_fotos.length) {
          var aleatorio = Math.floor(Math.random() * lista_fotos.length);

          if (!lista_fotos_agora.includes(aleatorio)) {
            lista_fotos_agora.push(aleatorio);
          }

        }
        var k = 0;
        for (var i = 1; i < 10; i++) {
          var fotoAleatoria = lista_fotos[lista_fotos_agora[k]].caminhoFoto;

          document.getElementById(`foto${i}`).src = `${fotoAleatoria}`;
          k++;
        }
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}




var lista_fotos1 = [];
var lista_fotos_agora1 = [];

function aleatorioPreWedding() {

  fetch("/fotos/aleatorioPreWedding", {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((fotos) => {
        lista_fotos1 = fotos;

        console.log("lista_fotos1");
        console.log(lista_fotos1[0].caminhoFoto);


        while (lista_fotos_agora1.length < 10 && lista_fotos_agora1.length < lista_fotos1.length) {
          var aleatorio = Math.floor(Math.random() * lista_fotos1.length);

          if (!lista_fotos_agora1.includes(aleatorio)) {
            lista_fotos_agora1.push(aleatorio);
          }

        }
        var k = 0;
        for (var i = 1; i < 10; i++) {
          var fotoAleatoria = lista_fotos1[lista_fotos_agora1[k]].caminhoFoto;

          document.getElementById(`foto1${i}`).src = `${fotoAleatoria}`;
          k++;
        }
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

var lista_fotos2 = [];

function listaCasamento() {

  fetch("/fotos/listaCasamento", {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((fotos) => {
        lista_fotos2 = fotos;

        console.log("lista_fotos2");
        console.log(lista_fotos2[0].caminhoFoto);
        var mensagem = ""

        for (var i = 0; i < lista_fotos2.length; i++) {
          var fotoAleatoria = lista_fotos2[i].caminhoFoto;
          var idFoto = lista_fotos2[i].idFoto;
          mensagem += `<div class="fotoContainer" data-id-foto="${idFoto}">
                         <div>
                            <div class="foto"><img src="${fotoAleatoria}" alt=""></div>
                          </div>
                          <div class="LIKE"> 
                            <button class="botaoCurtida" data-curtido="" onclick="curtirOuDescurtir(this)"><img src="" alt=""></button>
                          </div>
                      </div>`;
        }
        document.getElementById(`div_mensagem`).innerHTML = mensagem;
        verificarCurtida();
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

var lista_fotos3 = [];

function listaPreWedding(){

  fetch("/fotos/listaPreWedding", {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((fotos) => {
        lista_fotos3 = fotos;

        console.log("lista_fotos3");
        console.log(lista_fotos3[0].caminhoFoto);
        var mensagem = ""

        for (var i = 0; i < lista_fotos3.length; i++) {
          var fotoAleatoria = lista_fotos3[i].caminhoFoto;
          var idFoto = lista_fotos3[i].idFoto;
          mensagem += `<div class="fotoContainer" data-id-foto="${idFoto}">
                         <div>
                            <div class="foto"><img src="${fotoAleatoria}" alt=""></div>
                          </div>
                          <div class="LIKE"> 
                            <button class="botaoCurtida" data-curtido="" onclick="curtirOuDescurtir(this)"><img src="" alt=""></button>
                          </div>
                      </div>`;
        }
        document.getElementById(`div_mensagem`).innerHTML = mensagem;
        verificarCurtida();
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

}

var idUsuario = sessionStorage.ID_USUARIO;
var lista_fotos4 = [];

function listaCurtidas(){

  fetch(`/fotos/listaCurtidas/${idUsuario}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((fotos) => {
        lista_fotos4 = fotos;

        console.log("lista_fotos4");
        console.log(lista_fotos4[0].caminhoFoto);
        var mensagem = ""

        for (var i = 0; i < lista_fotos4.length; i++) {
          var fotoAleatoria = lista_fotos4[i].caminhoFoto;
          var idFoto = lista_fotos4[i].idFoto;
          mensagem += `<div class="fotoContainer" data-id-foto="${idFoto}">
                         <div>
                            <div class="foto"><img src="${fotoAleatoria}" alt=""></div>
                          </div>
                          <div class="LIKE"> 
                            <button class="botaoCurtida" data-curtido="" onclick="curtirOuDescurtir(this)"><img src="" alt=""></button>
                          </div>
                      </div>`;
        }
        document.getElementById(`div_mensagem`).innerHTML = mensagem;
        verificarCurtida();
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

}

var lista_fotos5 = [];
var lista_fotos_agora5 = [];

function listar() {

  fetch("/fotos/aleatorioCasamento", {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((fotos) => {
        lista_fotos5 = fotos;

        console.log("lista_fotos5");
        console.log(lista_fotos5[0].caminhoFoto);


        while (lista_fotos_agora5.length < 10 && lista_fotos_agora5.length < lista_fotos5.length) {
          var aleatorio = Math.floor(Math.random() * lista_fotos5.length);

          if (!lista_fotos_agora5.includes(aleatorio)) {
            lista_fotos_agora5.push(aleatorio);
          }

        }
        var k = 0;
        for (var i = 1; i < 10; i++) {
          var fotoAleatoria = lista_fotos5[lista_fotos_agora5[k]].caminhoFoto;

          document.getElementById(`foto${i}`).src = `${fotoAleatoria}`;
          k++;
        }
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}
