
var curtidaModel = require("../models/curtidaModel");

function publicar(req, res) {
    var foto = req.body.foto;
    var idUsuario = req.params.idUsuario;


    if (!foto) {
        return res.status(400).send("A foto está indefinida!");
    }

 if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        curtidaModel.publicar(foto, idUsuario)
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
    publicar
}