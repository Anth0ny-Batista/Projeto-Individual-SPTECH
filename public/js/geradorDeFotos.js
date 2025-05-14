var lista_fotos = [];
var lista_fotos_agora = [];

 function listar() {

    fetch("/fotos/listar", {
      method: "GET",
    })
      .then(function (resposta) {
        resposta.json().then((fotos) => {         
            lista_fotos = fotos;

            console.log("lista_fotos");
            console.log(lista_fotos[0].caminhoFoto);

            for(var i = 1; i < 10 ;i++ ){
                  var aleatorio = Math.random(); 
                  var aleatorio_0_a_tamLista = Math.floor(aleatorio * lista_fotos.length);
                  var fotoAleatoria = lista_fotos[aleatorio_0_a_tamLista].caminhoFoto;
          
                   document.getElementById(`foto${i}`).src = `${fotoAleatoria}`;
               
            }
        });
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }



var lista_fotos1 = [];
var lista_fotos_agora1 = [];

 function listar1() {

    fetch("/fotos/listar", {
      method: "GET",
    })
      .then(function (resposta) {
        resposta.json().then((fotos) => {         
            lista_fotos1 = fotos;

            console.log("lista_fotos1");
            console.log(lista_fotos1[0].caminhoFoto);

            for(var i = 1; i < 10 ;i++ ){
                  var aleatorio = Math.random(); 
                  var aleatorio_0_a_tamLista = Math.floor(aleatorio * lista_fotos1.length);
                  var fotoAleatoria = lista_fotos1[aleatorio_0_a_tamLista].caminhoFoto;
          
                   document.getElementById(`foto1${i}`).src = `${fotoAleatoria}`;
               
            }
        });
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }


function aleatorio() {
    var aleatorio = Math.random(); 
    var aleatorio_0_a_tamLista = Math.floor(aleatorio * lista_fotos.length);

    if (lista_fotos_agora.includes(aleatorio_0_a_tamLista)) {
        return aleatorio(); 
    } else {
        lista_fotos_agora.push(aleatorio_0_a_tamLista);
        return aleatorio_0_a_tamLista;
    }
}