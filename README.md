# Instruções de Configuração do Cliente Feliz

O Cliente Feliz é uma aplicação web desenvolvida para gerenciamento de clientes de uma empresa. Para utilizá-la, é necessário realizar a configuração de algumas etapas.

## Configuração do Banco de Dados

Para configurar o banco de dados MongoDB, é necessário criar um arquivo `.env` no diretório `cliente-feliz-node` e definir a URL do banco de dados. Você pode usar um banco de dados local ou um banco de dados hospedado na nuvem.

Exemplo de configuração do arquivo `.env.exemple`

## Instalação da API
Para instalar as dependecias da api va no diretório `api-cliente-feliz` e execute o comando:

        npm install

## Geração das Classes Prisma

Após configurar o banco de dados, é necessário gerar as classes Prisma. Para fazer isso, execute o comando abaixo no diretório `api-cliente-feliz`:

    npx prisma generate

## Execução da API

Para executar a API do Cliente Feliz, execute o seguinte comando no diretório `api-cliente-feliz`:

    npm run dev

## Execução do Front-end

Após configurar e executar a API, é necessário executar o front-end da aplicação. Para fazer isso, siga os passos abaixo:

1. Acesse o diretório `front-end-cliente-feliz`
2. Instale as dependências do projeto com o comando `npm install`
3. Execute o comando `ng serve` para iniciar a aplicação

A aplicação estará pronta para uso em `http://localhost:4200/`

## Conclusão

Pronto! Você configurou e executou a aplicação Cliente Feliz com sucesso.

