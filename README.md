# Projeto Trybe-Futebol-Clube

# Contexto
Este projeto trata-se de uma ferramenta para acessar informações de um campeonato de futebol,
podendo obter os resultados das partidas, encontrar partidas que ainda iram acontecer, e saber detalhes dos times como quantidade de gols ou ate mesmo sua eficiencia.

Esse projeto e desenvolvido pela trybe, o objetivo é poder testar a capacidade de seus alunos de construir um backend orientado a objetos utilizando ferramentas como sequelize, express e Docker.

### os arquivos aos quais eu sou responsavel:
* os presentes na pasta `backend/src`
* os arquivos `Dockerfile` de backend & frontend

### :construction: Este projeto ainda sera refatorado :construction:

## Técnologias usadas

### Back-end:
   > Desenvolvido usando: NodeJS, TypeScript, Sequelize, JsonWebToken, ExpressJS, MYSQL, ES6;

### Testes:
   > Desenvolvido usando: mocha, sinon, chai;

## Instalando Dependências

```bash
npm install
```

## Executando aplicação

### subindo Dockers:

  ```
  npm run compose:up
  ```
### Para rodar o front-end:

  ```
    cd app/frontend && npm start
  ```

## Executando Testes:

* Para rodar todos os testes:

  ```
    npm test
  ```
#### Os testes sao voltados apenas para o backend !!
