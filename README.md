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
-Sequelize

### Frontend

-ReactJS
-styled-components

### Aplicação

Algumas prints de toda aplicação

### Documentação da API
![BillIsomnia1](https://user-images.githubusercontent.com/26700193/88254336-62e64500-cc8b-11ea-8c0f-1d9c1edee63e.png)

![BillIsomnia2](https://user-images.githubusercontent.com/26700193/88254376-8c9f6c00-cc8b-11ea-89be-46e4fb4d5505.png)

![BillIsomnia3](https://user-images.githubusercontent.com/26700193/88254387-96c16a80-cc8b-11ea-9632-c2ee8837d45d.png)

![BillIsomnia](https://user-images.githubusercontent.com/26700193/88254413-a640b380-cc8b-11ea-8144-60bb8765841f.png)


### Cobertura de Testes
![test](https://user-images.githubusercontent.com/26700193/88254439-b9ec1a00-cc8b-11ea-82fd-e9ef885a0270.png)

![coverage](https://user-images.githubusercontent.com/26700193/88254440-ba84b080-cc8b-11ea-8bc6-35706d9599a3.png)

![coverage1](https://user-images.githubusercontent.com/26700193/88254442-bb1d4700-cc8b-11ea-9613-e65286c268d5.png)


### Frontend
![frontend](https://user-images.githubusercontent.com/26700193/88254491-d9834280-cc8b-11ea-90bb-4f420c89ed68.png)

![frontend1](https://user-images.githubusercontent.com/26700193/88254494-da1bd900-cc8b-11ea-8f1e-556e5d8d290c.png)

![frontend2](https://user-images.githubusercontent.com/26700193/88254495-dab46f80-cc8b-11ea-9a5b-96584d40eea1.png)

![frontendMobile](https://user-images.githubusercontent.com/26700193/88254496-dab46f80-cc8b-11ea-80ef-bb6ac3a877e5.png)
![frontendIphone](https://user-images.githubusercontent.com/26700193/88254497-db4d0600-cc8b-11ea-912b-1825b0624b0f.png)

### APP React Native
![screenshot-2020-07-23_02 06 34 171](https://user-images.githubusercontent.com/26700193/88254584-151e0c80-cc8c-11ea-9260-1c4cefe3c3dc.png)

![screenshot-2020-07-23_02 08 28 235](https://user-images.githubusercontent.com/26700193/88254668-5d3d2f00-cc8c-11ea-8ec9-467da57c26ba.png)

![screenshot-2020-07-23_02 08 34 372](https://user-images.githubusercontent.com/26700193/88254601-1fd8a180-cc8c-11ea-9d48-0d358d822996.png)


## Autor

Willian Gaudencio de Rezende
Email: <wil-g2@hotmail.com>
Linkedin: <https://www.linkedin.com/in/willian-gaudencio-38864312b/>
