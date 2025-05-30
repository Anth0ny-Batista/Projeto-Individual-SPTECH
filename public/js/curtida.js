
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
            .then(validacaoCurtida => {
                console.log('Curtida: recebida:', validacaoCurtida)

                if (validacaoCurtida.curtida == true) {
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
                alertaCurtidas()
            }
        })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    }
}

function alertaCurtidas(){
    var alertaCurtida = document.querySelector('.alertaCurtida');
    alertaCurtida.classList.add("mostrar");


    setTimeout(() => {
        alertaCurtida.classList.remove("mostrar");
    }, 4500); 
}


async function verificarFavorito() {
    var containers = document.querySelectorAll('.fotoContainer');
    var jaTemFavorito = false;

    // verificar se já existe um favorito
    for (var i = 0; i < containers.length; i++) {
        var container = containers[i];
        var idFoto = container.dataset.idFoto;

        var resposta = await fetch(`/curtidas/verificarFavorito/${idUsuario}/${idFoto}`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

        var resultado = await resposta.json();
        console.log('Favorito recebido:', resultado)

        if (resultado.favorito === true) {
            jaTemFavorito = true;
            break; 
        }
    }

    for (var i = 0; i < containers.length; i++) {
        var container = containers[i];
        var idFoto = container.dataset.idFoto;
        var botaofavorito = container.querySelector('.botaofavorito');
        var img = botaofavorito.querySelector('img');

        var resposta = await fetch(`/curtidas/verificarFavorito/${idUsuario}/${idFoto}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        var resultado = await resposta.json();

        if (resultado.favorito === true) {
            botaofavorito.dataset.favorito = "true";
            img.src = "./assets/estrela-preenchida.png";
            botaofavorito.style.cursor = 'pointer';
            botaofavorito.style.pointerEvents = 'auto';
        } else {
            botaofavorito.dataset.favorito = "false";
            img.src = "./assets/estrela-sem-preenchimento.png";

            if (jaTemFavorito) {
                botaofavorito.style.cursor = 'not-allowed';
                botaofavorito.style.pointerEvents = 'none';
            } else {
                botaofavorito.style.cursor = 'pointer';
                botaofavorito.style.pointerEvents = 'auto';
            }
        }
    }
}



async function verificarFavoritoSelecao() {
    var containers = document.querySelectorAll('.fotoContainer1');
    var jaTemFavorito = false;

    // verificar se já existe um favorito
    for (var i = 0; i < containers.length; i++) {
        var container = containers[i];
        var idFoto = container.dataset.idFoto;

        var resposta = await fetch(`/curtidas/verificarFavorito/${idUsuario}/${idFoto}`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

        var resultado = await resposta.json();
        console.log('Favorito recebido:', resultado)

        if (resultado.favorito === true) {
            jaTemFavorito = true;
            break; 
        }
    }

    for (var i = 0; i < containers.length; i++) {
        var container = containers[i];
        var idFoto = container.dataset.idFoto;
        var botaofavorito = container.querySelector('.botaofavorito');
        var img = botaofavorito.querySelector('img');

        var resposta = await fetch(`/curtidas/verificarFavorito/${idUsuario}/${idFoto}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        var resultado = await resposta.json();

        if (resultado.favorito === true) {
            botaofavorito.dataset.favorito = "true";
            img.src = "./assets/estrela-preenchida.png";
            botaofavorito.style.cursor = 'pointer';
            botaofavorito.style.pointerEvents = 'auto';
        } else {
            botaofavorito.dataset.favorito = "false";
            img.src = "./assets/estrela-sem-preenchimento.png";

            if (jaTemFavorito) {
                botaofavorito.style.cursor = 'not-allowed';
                botaofavorito.style.pointerEvents = 'none';
            } else {
                botaofavorito.style.cursor = 'pointer';
                botaofavorito.style.pointerEvents = 'auto';
            }
        }
    }
}




function favoritarOuDesfavoritar(botaofavorito) {
    var container = botaofavorito.closest('.fotoContainer');
    var idFoto = container.dataset.idFoto;
    var favorito = botaofavorito.dataset.favorito;

    if (favorito == "true") {

        fetch(`/curtidas/desfavoritar/${idUsuario}`, {
            method: "DELETE",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ idFoto: idFoto })

        }).then(res => {
            ''
            if (res.ok) {
                botaofavorito.dataset.favorito = "false";
                var imagem = botaofavorito.querySelector("img");
                imagem.src = "./assets/estrela-sem-preenchimento.png";
                verificarFavorito();
            }
        })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    } else {

        fetch(`/curtidas/favoritar/${idUsuario}`, {
            method: "POST",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ idFoto: idFoto })

        }).then(res => {
            if (res.ok) {
                botaofavorito.dataset.favorito = "true";
                var imagem = botaofavorito.querySelector("img");
                imagem.src = "./assets/estrela-preenchida.png";
                verificarFavorito();
            }
        })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    }
}




function favoritarOuDesfavoritar1(botaofavorito) {
    var container = botaofavorito.closest('.fotoContainer1');
    var idFoto = container.dataset.idFoto;
    var favorito = botaofavorito.dataset.favorito;

    if (favorito == "true") {

        fetch(`/curtidas/desfavoritar/${idUsuario}`, {
            method: "DELETE",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ idFoto: idFoto })

        }).then(res => {
            ''
            if (res.ok) {
                botaofavorito.dataset.favorito = "false";
                var imagem = botaofavorito.querySelector("img");
                imagem.src = "./assets/estrela-sem-preenchimento.png";
                verificarFavorito();
            }
        })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    } else {

        fetch(`/curtidas/favoritar/${idUsuario}`, {
            method: "POST",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ idFoto: idFoto })

        }).then(res => {
            if (res.ok) {
                botaofavorito.dataset.favorito = "true";
                var imagem = botaofavorito.querySelector("img");
                imagem.src = "./assets/estrela-preenchida.png";
                verificarFavorito();
            }
        })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    }
}




