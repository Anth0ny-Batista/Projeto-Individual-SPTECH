
var curtidaModel = require("../models/curtidaModel");

function verificarCurtida(req, res) {
    var idFoto = req.params.idFoto;
    var idUsuario = req.params.idUsuario;


    if (idFoto == undefined) {
        return res.status(400).send("A foto está indefinida!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        curtidaModel.verificarCurtida(idFoto, idUsuario)
            .then(
                function (resultado) {
                    var curtidaExiste = false;      
                    if (resultado.length > 0){
                        curtidaExiste = true;
                    }         
                                
                res.json({ curtida: curtidaExiste });
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function curtir(req, res) {
    var idFoto = req.body.idFoto;
    var idUsuario = req.params.idUsuario;


    if (idFoto == undefined) {
        return res.status(400).send("A foto está indefinida!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        curtidaModel.curtir(idFoto, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function descurtir(req, res) {
    var idFoto = req.body.idFoto;
    var idUsuario = req.params.idUsuario;


    if (idFoto == undefined) {
        return res.status(400).send("A foto está indefinida!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        curtidaModel.descurtir(idFoto, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    curtir,
    descurtir,
    verificarCurtida
}