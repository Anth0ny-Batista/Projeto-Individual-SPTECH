-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

Create database ProjetoIndividual;
use ProjetoIndividual;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(20) not null,
sobrenome varchar(40) not null,
dtNascimento date not null,
sexo char(1) not null
);

create table login(
idLogin int auto_increment,
email varchar(50) not null,
senha varchar(25) not null,
fkUsuario int,

constraint pkComposta_userLogin primary key (idLogin, fkUsuario),
constraint fk_usuario foreign key (fkUsuario) references usuario(idUsuario)
);

create table foto (
idFoto int primary key auto_increment,
nomeFoto varchar(50) not null,
caminhoFoto varchar(100) not null,
dtUpload datetime default current_timestamp,
fkCategoria int,

constraint fk_categoriaFoto foreign key (fkCategoria) references categoriaFoto(idCategoria)
);

create table categoriaFoto (
    idCategoria int primary key auto_increment,
    nomeCategoria varchar(30) not null
);


create table curtida(
idCurtida int auto_increment,
dtCurtida datetime default current_timestamp, 
fkUsuario int,
fkFoto int,

constraint pkComposta_userCurtidaFt primary key (idCurtida, fkUsuario, fkFoto),
constraint fk_usuarioCurtida foreign key (fkUsuario) references usuario(idUsuario),
constraint fk_fotoCurtida foreign key (fkFoto) references foto(idFoto)
);

create table favorito(
idFavorito int auto_increment,
dtFavorito datetime default current_timestamp, 
fkUsuario int,
fkFoto int,

constraint pkComposta_userFavorito primary key (idFavorito, fkUsuario, fkFoto),
constraint fk_usuarioFavorito foreign key (fkUsuario) references usuario(idUsuario),
constraint fk_fotoFavorito foreign key (fkFoto) references foto(idFoto)
);