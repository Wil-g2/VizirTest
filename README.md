# TESTE - Challenge Vizer

## Sobre desafio

A empresa de telefonia Telzir, especializada em chamadas de longa distância nacional, vai
colocar um novo produto no mercado chamado FaleMais.

## Instalando

Obs.: É necessário antes de instalar este projeto, ter instalado e rodando node.js:

- Nodejs (https://nodejs.org/en/)

para fazer a instalação das dependências do projeto você pode utilizar o yarn ou utilizar npm

Para instalá-lo em sua máquina faça os comandos a seguir:

```bash
  git clone  https://github.com/Wil-g2/VizirTest.git
  cd VizirTest
```

## Baixando dependências

acesse a pasta backend e execute o comando:

```bash
    cd backend
    yarn ou npm install   
```

## Criar arquivo de variáveis

Após o comando preenher as variáveis

```bash
    cd backend
    cp .env.example .env
```

## Executando migrations e seed 
Foi utilizado sequelize ORM e postgres para teste e desenvolvimento da aplicação, para banco de dados se não tiver um banco de dados postgres, pode ser usado sqlite para testar por usar sequelize aceita outros bancos, para executar usando o sqlite alterar o DB_DIALECT=sqlite no arquivo .env

SE USAR POSTGRES DEVE SER CRIADO UM BANCO DE DADOS E PREENCHER NO .env

Obs: pode se usar yarn ou npm nos comandos abaixo.

```bash 
    yarn sequelize db:migrate
    yarn sequelize db:seed:all
```

Se quiser executar o postgres em um container docker pode usar o seguinte comando (LEMBRANDO QUE SE TEM QUE TER O DOCKER INSTALADO)

```bash
    docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```

## Executando o projeto

```bash
    yarn dev ou npm run dev
```

## Executando o projeto

Após executar o camando na pasta backend faça o mesmo para frontend:

```bash
    cd frontend
    yarn ou npm install
    yarn start ou npm run start
```

### Testes

No backend tem uma pastas **tests** onde se encontra alguns testes de integração da API

Para executá-los os testes basta executar o comando:

```bash
yarn test
```

ou

```bash
npm run test
```

### Docker

Dentro da pasta do backend execute o comando

```bash
docker-compose build
docker-compose up
```

Após executar os comando já deve ser possivel acessar a api usando o endereço [http://localhost:3333](http://localhost:3000)

### Backend Ferramentas e Bibliotecas

### Padrão de Código

- ESLint
- Prettier

### Gerenciando variáveis ambiente

- Dotenv

### Documentação da API

- Swagger

### Utilitários

-Nodemon
-Cors
-Helmet (Segurança)

### Teste da Aplicação

-Jest
-Supertest

### Container

-Docker

### Backend

-Node.js
-Express

### Frontend

-ReactJS
-styled-components

### Aplicação

Algumas prints de toda aplicação

### Documentação da API

### Cobertura de Testes

### Frontend

## Autor

Willian Gaudencio de Rezende
Email: <wil-g2@hotmail.com>
Linkedin: <https://www.linkedin.com/in/willian-gaudencio-38864312b/>
