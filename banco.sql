create database bancodedados;
use bancodedados;

create table funcionarios(
	id int primary key auto_increment,
	nome varchar(255),
    cpf varchar(255),
    endereco varchar(255),
    credencial varchar(255),
    cargo varchar(255)
);

create table instrumentos(
	id int primary key auto_increment,
	nome varchar(255)
);

create table categoriakits(
	id int primary key auto_increment,
	nome varchar(255)
);

drop table instrumentos, funcionarios, categoriakits;

select * from funcionarios;
select * from instrumentos;
select * from categoriakits;