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
- How to create table data:

  ````
    USE SUCOS;
    ALTER TABLE TBCLIENTE ADD PRIMARY KEY (CPF);

    ALTER TABLE TBCLIENTE ADD COLUMN (DATA_NASCIMENTO DATE);

    INSERT INTO TBCLIENTE (
    CPF,
    NOME,
    ENDERECO1,
    ENDERECO2,
    BAIRRO,
    CIDADE,
    ESTADO,
    CEP,
    IDADE,
    SEXO,
    LIMITE_CREDITO,
    VOLUME_COMPRA,
    PRIMEIRA_COMPRA,
    DATA_NASCIMENTO
    ) VALUES
    ('11122233344', 'Eric', '12 De Julho, 666', 'blabla, 233', 'Boa vista', 'Porto Alegre', 'RS', '12345678', 25, 'M', 1200.00, 2000, 0, '1998-10-03');
  ````