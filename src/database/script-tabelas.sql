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
email varchar(50) unique not null,
senha varchar(25) not null
);

create table categoriaFoto (
    idCategoria int primary key auto_increment,
    nomeCategoria varchar(30) not null
);

create table foto (
    idFoto int primary key auto_increment,
    nomeFoto varchar(50) not null,
    caminhoFoto varchar(100) not null,
    dtUpload datetime default current_timestamp,
    fkCategoria int,

    constraint fk_categoriaFoto foreign key (fkCategoria) references categoriaFoto(idCategoria)
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

 -- ../assets/imgs/01.jpg
select * from usuario;
select * from categoriaFoto;
select * from foto;
select * from curtida;
select * from favorito;

insert into categoriaFoto values
	(default, 'Casamento'),
    (default, 'Pré-Wedding'),
    (default, 'Especiais'),
    (default, 'EspeciaisCasamento'),
    (default, 'EspeciaisPreWedding');

insert into foto (nomeFoto, caminhoFoto, fkCategoria) values
        ('01', '../assets/imgs/c01.jpg', 1),
        ('02', '../assets/imgs/c02.jpg', 1),
        ('03', '../assets/imgs/c03.jpg', 1),
        ('04', '../assets/imgs/c04.jpg', 1),
        ('05', '../assets/imgs/c05.jpg', 1),
        ('06', '../assets/imgs/c06.jpg', 1),
        ('07', '../assets/imgs/c07.jpg', 1),
        ('08', '../assets/imgs/c08.jpg', 1),
        ('09', '../assets/imgs/c09.jpg', 1),
        ('10', '../assets/imgs/c10.jpg', 1),
        ('11', '../assets/imgs/c11.jpg', 1),
        ('12', '../assets/imgs/c12.jpg', 1),
        ('13', '../assets/imgs/c13.jpg', 1),
        ('14', '../assets/imgs/c14.jpg', 1),
        ('15', '../assets/imgs/c15.jpg', 1),
        ('16', '../assets/imgs/c16.jpg', 1),
        ('17', '../assets/imgs/c17.jpg', 1),
        ('18', '../assets/imgs/c18.jpg', 1),
        ('19', '../assets/imgs/c19.jpg', 1),
        ('20', '../assets/imgs/c20.jpg', 1);
        
        insert into foto (nomeFoto, caminhoFoto, fkCategoria) values
        ('30', '../assets/imgs/p01.jpg', 2),
        ('31', '../assets/imgs/p02.jpg', 2),
        ('32', '../assets/imgs/p03.jpg', 2),
        ('33', '../assets/imgs/p04.jpg', 2),
        ('34', '../assets/imgs/p05.jpg', 2),
        ('35', '../assets/imgs/p06.jpg', 2),
        ('36', '../assets/imgs/p07.jpg', 2),
        ('37', '../assets/imgs/p08.jpg', 2),
        ('38', '../assets/imgs/p09.jpg', 2),
        ('39', '../assets/imgs/p10.jpg', 2),
        ('40', '../assets/imgs/p11.jpg', 2),
        ('41', '../assets/imgs/p12.jpg', 2),
        ('42', '../assets/imgs/p13.jpg', 2),
        ('43', '../assets/imgs/p14.jpg', 2),
        ('44', '../assets/imgs/p15.jpg', 2),
        ('45', '../assets/imgs/p16.jpg', 2),
        ('46', '../assets/imgs/p17.jpg', 2),
        ('47', '../assets/imgs/p18.jpg', 2),
        ('48', '../assets/imgs/p19.jpg', 2),
        ('49', '../assets/imgs/p20.jpg', 2);
        
        insert into foto (nomeFoto, caminhoFoto, fkCategoria) values
        ('60', '../assets/imgs/02.jpg', 3),
        ('61', '../assets/imgs/03.jpg', 3),
        ('62', '../assets/imgs/04.jpg', 3),
        ('63', '../assets/imgs/05.jpg', 3),
        ('64', '../assets/imgs/06.jpg', 3),
        ('65', '../assets/imgs/07.jpg', 3),
        ('66', '../assets/imgs/08.jpg', 3);
        
        insert into foto (nomeFoto, caminhoFoto, fkCategoria) values
        ('67', '../assets/imgs/02.jpg', 4),
        ('68', '../assets/imgs/03.jpg', 4),
        ('69', '../assets/imgs/07.jpg', 4),
        ('70', '../assets/imgs/08.jpg', 4);
        
        insert into foto (nomeFoto, caminhoFoto, fkCategoria) values
        ('71', '../assets/imgs/04.jpg', 5),
        ('72', '../assets/imgs/05.jpg', 5),
        ('73', '../assets/imgs/06.jpg', 5);
        
delete from foto where idFoto = 1;

select f.idFoto, f.caminhoFoto, f.fkCategoria from foto f 
	join curtida c
    on f.idFoto = c.fkFoto
    where c.fkUsuario = 1;
    
select f.idFoto, f.caminhoFoto, f.fkCategoria, fa.fkUsuario from foto f 
	join favorito fa
    on f.idFoto = fa.fkFoto
    where fa.fkUsuario = 1;
    
select count(f.idFoto) as contagemCurtidas, f.caminhoFoto, f.fkCategoria from foto f 
	join curtida c
    on f.idFoto = c.fkFoto
    group by f.caminhoFoto, f.fkCategoria 
    order by contagemCurtidas desc;
    
select count(f.idFoto) as contagemCurtidas, ca.nomeCategoria from foto f 
	join curtida c
    on f.idFoto = c.fkFoto
    join categoriaFoto ca
    on f.fkCategoria = ca.idCategoria
    group by f.fkCategoria 
    order by contagemCurtidas desc;    
    
select count(f.idFoto) as contagemCurtidas, f.caminhoFoto, f.fkCategoria from foto f 
	join curtida c
    on f.idFoto = c.fkFoto
    group by f.caminhoFoto, f.fkCategoria 
    order by contagemCurtidas desc limit 1;
    
select count(f.idFoto) as contagemfavoritos, f.caminhoFoto, f.fkCategoria from foto f 
	join favorito fa
    on f.idFoto = fa.fkFoto
    group by f.caminhoFoto, f.fkCategoria 
    order by contagemfavoritos desc limit 1;

select count(f.idFoto) as contagemCurtidas from foto f 
	join curtida c
    on f.idFoto = c.fkFoto;
    
select count(f.idFoto) as contagemFavoritos from foto f 
	join favorito fa
    on f.idFoto = fa.fkFoto;

    
select f.idFoto as 'ID FOTO', c.nomeCategoria 'Nome da Categoria:'
	from foto f
    join categoriaFoto c
    on f.fkCategoria = c.idCategoria;