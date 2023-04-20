<p align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=Concluded&color=blue&style=flat"/>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Rafa-KozAnd/Ignite_React-Native_Activity_03">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/top/Rafa-KozAnd/Ignite_React-Native_Activity_03">
  <img alt="GitHub repo file count" src="https://img.shields.io/github/directory-file-count/Rafa-KozAnd/Ignite_React-Native_Activity_03">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Rafa-KozAnd/Ignite_React-Native_Activity_03">
  <img alt="GitHub language count" src="https://img.shields.io/github/license/Rafa-KozAnd/Ignite_React-Native_Activity_03">
</p>

# Ignite_React-Native_Activity_03

Node JS activity done with 'Rocketseat' Ignite course. ("Chapter III")

## Cadastro de carro

**RF**
 - Deve ser possível cadastrar um novo carro.
 - Deve ser possível listar todas as categorias.

**RN**
 - Não deve ser possível cadastrar um carro com uma placa já existente.
 - O carro deve ser cadastrado, com padrão por disponibilidade.
 * O usuário responsável pelo cadastro deve ser um usuário administrador.
________________________________________________________________________________
## Listagem de carros

**RF**
 - Deve ser possível listar todos os carros disponíveis.
 - Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
 - Deve ser possível listar todos os carros disponíveis pelo nome da marca.
 - Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
 - O usuário não precisar estar logado no sistema.
_________________________________________________________________________________

## Cadastro de Especificação no carro

**RF**
 - Deve ser possível cadastrar uma especificação para um carro.

**RN**
 - Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
 - Não deve ser possível cadastrar uma espeficiação já existente para o mesmo carro.
 - O usuário responsável pelo cadastro deve ser um usuário administrador.
___________________________________________________________________________________

## Cadastro de imagens do carro

**RF**
 - Deve ser possível cadastrar a imagem do carro.

**RNF**
 - Utilizar o multer para upload dos arquivos.

**RN**
 -  O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
 -  O usuário responsável pelo cadastro deve ser um usuário administrador.
_________________________________________________________________________________

## Aluguel de carro

**RF**
 - Deve ser possível cadastrar um aluguel.

**RNF**

*RN**  
 - O aluguel deve ter duração mínima de 24 horas.
 - Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo usuário.
 - Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo carro.
 - O usuário deve estar logado na aplicação.
 
 ## 💻 Sobre o capítulo III - Continuando a aplicação.
 
 Daremos início à nossa aplicação principal criando a base do app com autenticação, cadastro, upload de avatar, etc. utilizando um banco de dados relacional e conheceremos conceitos e ferramentas como Docker, TypeORM, JWT e bcrypt.
