---
author: "Zoranildo Santos"
title: "API Node Desacoplada: Criando servers com express e fastify"
description: "Explorando a Criação de Servidores Desacoplados com Express e Fastify em APIs Node"
publishedAt: "26/07/2023"
tags: ["node", "typescript", "api"]
---

Neste artigo vamos criar os dois servidores, um com express e outro com fastify e deixar pronto para alternar entre um e outro mudando apenas o valor de uma variável.

Para dar continuidade ao projeto, vamos criar uma pasta src na raiz do projeto e outra pasta chamada infra dentro de src. Dentro de infra vamos criar uma pasta ports e dentro de ports mais duas pasta express e fastify. A estrutura de pastas devera ficar como o exemplo abaixo:

![estrutura de pastas](https://res.cloudinary.com/doampncx5/image/upload/v1693131622/Screenshot_2023-07-25_220324.png)

Antes de seguir vamos instalar algumas bibliotecas como dependencies:

<Code language="bash">
  yarn add dotenv express fastify
</Code>

e outra como devDependencies

<Code language="bash">
  yarn add @types/express -D
</Code>

**dotenv**: pacote utilizado em projetos Node.js para carregar variáveis de ambiente de arquivos .env. Ele é especialmente útil para gerenciar configurações sensíveis e variáveis que podem variar de ambiente para ambiente (por exemplo, desenvolvimento, teste e produção) sem a necessidade de codificar essas informações diretamente no código.

**express**: framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos.

**fastify**: é uma estrutura da Web altamente focada em fornecer a melhor experiência de desenvolvimento com o mínimo de sobrecarga e uma poderosa arquitetura de plug-in. É inspirado no Hapi e no Express.

**@types/express**: adiciona tipagem estática ao express, o que permite ao TypeScript verificar tipos em tempo de compilação. Com isso, erros relacionados a tipos são detectados antecipadamente, evitando problemas em tempo de execução.

## Criando o server express

Dentro da pasta express vamos criar um arquivo index.ts e colocar o seguinte código:

<Code language="typescript">
  import 'dotenv/config'
  import express from 'express'

  // dotenv/config: usado para carregar as variáveis de ambiente do arquivo .env.

  // express: módulo do express para criar o servidor web e tratar
  // as rotas e requisições HTTP.

  const PORT = 5000
  // define a porta na qual o servidor Express irá escutar as
  // requisições HTTP

  const app = express()

  // Aqui, uma instância do servidor Express é criada e armazenada
  // na variável app. Essa instância será responsável por gerenciar
  // as rotas, as requisições e as respostas.

  app.listen(PORT, () => {
    console.log('Express app listening on port ${PORT}')
  })

  // app.listen(...): Essa função é usada para iniciar o servidor
  // Express e fazê-lo começar a ouvir as requisições HTTP na porta
  // especificada. Quando uma requisição é recebida na porta
  // especificada, o Express cuida de roteá-la para o handler
  // apropriado.

  // O console.log exibe uma mensagem indicando que o servidor
  // Express foi iniciado e está ouvindo na porta 5000.

  export { app }

  // O objeto app é exportado para que possa ser utilizado em outros
  // módulos da aplicação. Isso permite que outros arquivos acessem
  // o servidor Express e adicionem rotas ou funcionalidades
  // adicionais, se necessário.
</Code>

Agora vamos criar dentro da pasta src um arquivo chamado server.ts e importar a instância do express:

<Code language="typescript">
  const express = './infra/ports/express'
  require(express)
</Code>

No arquivo package.json vamos criar um script pra subir o servidor, pra esse fim vamos usar a biblioteca tsx que executará os arquivos .ts em modo de observação(watch):

<Code language="json">
  "scripts": {
    "start:dev": "tsx watch src/server.ts"
  },
</Code>

O arquivo package.json atualizado ficará assim:

<Code language="typescript">
  {
    "name": "dev-to",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "scripts": {
      "start:dev": "tsx watch src/server.ts"
    },
    "devDependencies": {
      "@types/express": "^4.17.17",
      "@types/node": "^20.4.5",
      "tsup": "^7.1.0",
      "tsx": "^3.12.7",
      "typescript": "^5.1.6"
    },
    "dependencies": {
      "dotenv": "^16.3.1",
      "express": "^4.18.2",
      "fastify": "^4.20.0"
    }
  }
</Code>

Terminado esse trabalho execute o comando yarn start:dev no terminal pra subir a aplicação, que deverá ter a seguinte saída caso ocorra tudo como esperado:

![terminal](https://res.cloudinary.com/doampncx5/image/upload/v1693131726/Screenshot_2023-07-26_132052.png)

## Criando o server com fastify

Dentro da pasta fastify vamos criar um arquivo index.ts e colocar o seguinte código:

<Code language="typescript">
  import 'dotenv/config'
  import fastify from 'fastify'

  // dotenv/config: usado para carregar as variáveis de ambiente do arquivo .env.
  // fastify: módulo do Fastify utilizado para criar o servidor web e tratar as rotas e requisições HTTP.

  const server = fastify({ logger: true })

  // Aqui, uma instância do servidor Fastify é criada com a opção
  // logger: true. Isso habilita o registro de logs para as
  // requisições recebidas pelo servidor, o que pode ser útil para
  // depuração e monitoramento.

  const app = async () => {
  // O código define uma função assíncrona chamada app. Essa função
  // será responsável por iniciar o servidor Fastify e ouvir as
  // requisições.

    try {
      server.listen({
        host: '0.0.0.0',
        port: process.env.PORT_SERVER ? Number(process.env.PORT_SERVER) : 5000,
      })
      console.log(Server fastify running in port ${5000})
    } catch (error) {
      console.error('Erro server fastify', error)
    }
  }

  // O bloco try...catch é usado para lidar com qualquer exceção que
  // possa ocorrer durante o processo de inicialização do servidor.

  // server.listen(...): Essa função é usada para iniciar o servidor
  // e começar a ouvir as requisições HTTP. Ela recebe um objeto de
  // opções como argumento. Neste caso, o servidor está configurado
  // para escutar em todas as interfaces de rede (0.0.0.0) e na
  // porta definida numa variável de ambiente chamada PORT_SERVER.
  // Se essa variável não estiver definida, o servidor usará a porta
  // 5000 por padrão.

  // O console.log exibe uma mensagem indicando que o servidor
  // Fastify foi iniciado e está ouvindo na porta 5000.

  // Se algum erro ocorrer durante a inicialização do servidor, o
  // bloco catch será acionado e exibirá uma mensagem de erro no
  // console.

  app()
</Code>

Crie um arquivo .env na raiz do projeto e coloque o código abaixo:

<Code language="typescript">
  SERVER_TYPE= // Os valores são express ou fastify
  PORT_SERVER=5000
</Code>

O próximo passo é atualizar o arquivo server.ts pra subir o servidor de acordo com o valor da variável de ambiente SERVER_TYPE fornecida no arquivo .env. Com a alteração o arquivo ficará como apresentado abaixo:

<Code language="typescript">
  import 'dotenv/config'
  const express = './infra/ports/express'
  const fastify = './infra/ports/fastify'
  const server = process.env.SERVER_TYPE === 'fastify' ? fastify : express

  require(server)
</Code>


Agora você pode alternar entre express e fastify alterando o valor da variável SERVER_TYPE. Ao escolher o fastify a saída no terminal deverá ser assim:

![terminal](https://res.cloudinary.com/doampncx5/image/upload/v1693131813/Screenshot_2023-07-26_133513.png)

Aqui chega ao fim o segundo artigo da série. Qualquer dúvida deixe nos comentários que terei o prazer de responder.