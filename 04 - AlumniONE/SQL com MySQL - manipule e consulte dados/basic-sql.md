# SQL

- How to create simple database:

  ````
    CREATE DATABASE db_name;
  ````
- How to delete database:

  ````
    DROP DATABASE db_name;
  ````
- How to select your database:

  ````
    USE db_name;
  ````
- How to select tables in database:

  ````
    SELECT * FROM tables; 
  ````
- How to create table:

  ````
    CREATE TABLE tbCliente (
      CPF VARCHAR(11),
      NOME VARCHAR(100),
      ENDERECO1 VARCHAR(150),
      ENDERECO2 VARCHAR(150),
      BAIRRO VARCHAR(50),
      CIDADE VARCHAR(50),
      ESTADO VARCHAR(50),
      CEP VARCHAR(8),
      IDADE SMALLINT,
      SEXO VARCHAR(1),
      LIMITE_CREDITO FLOAT,
      VOLUME_COMPRA FLOAT,
      PRIMEIRA_COMPRA BIT(1)
    )
  ````
    