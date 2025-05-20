
var idUsuario = sessionStorage.ID_USUARIO;

function verificarCurtida() {
    var containers = document.querySelectorAll('.fotoContainer');

    containers.forEach(container => {
        var idFoto = container.dataset.idFoto;
        var botaoCurtida = container.querySelector('.botaoCurtida');

        fetch(`/curtidas/verificarCurtida/${idUsuario}/${idFoto}`, {
            method: "GET",

            headers: { "Content-Type": "application/json" },

        }).then(res => res.json())
            .then(curtida => {
                console.log('Curtida: recebida:',curtida)
                
                if (curtida.curtida) {
                    botaoCurtida.dataset.curtido = "true";
                    var imagem = botaoCurtida.querySelector("img");
                    imagem.src = "./assets/coracao-preenchido.png";
                } else {
                    botaoCurtida.dataset.curtido = "false";
                    var imagem = botaoCurtida.querySelector("img");
                    imagem.src = "./assets/coracao-sem-preenchimento.png";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

    });

}


function curtirOuDescurtir(botaoCurtida) {
    var container = botaoCurtida.closest('.fotoContainer');
    var idFoto = container.dataset.idFoto;
    var curtido = botaoCurtida.dataset.curtido;

    if (curtido == 'true') {

        fetch(`/curtidas/descurtir/${idUsuario}`, {
            method: "DELETE",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ idFoto: idFoto })

        }).then(res => {
            if (res.ok) {
                botaoCurtida.dataset.curtido = "false";
                var imagem = botaoCurtida.querySelector("img");
                imagem.src = "./assets/coracao-sem-preenchimento.png";
            }
        })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    } else {

        fetch(`/curtidas/curtir/${idUsuario}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idFoto: idFoto })
        }).then(res => {
            if (res.ok) {
                botaoCurtida.dataset.curtido = "true";
                var imagem = botaoCurtida.querySelector("img");
                imagem.src = "./assets/coracao-preenchido.png";
            }
        })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    }
}




