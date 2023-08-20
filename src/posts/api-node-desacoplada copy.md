---
title: "Guia Prático: Aprenda a Construir uma API Node.js Desacoplada"
description: "O intuito dessa série de artigos é mostrar na prática como criar e estruturar inicialmente uma aplicação Node.js"
date: "26/07/2023"
tags: ["node", "cleancode", "typescript", "api"]
---

O intuito dessa série de artigos é mostrar na prática como criar e estruturar inicialmente uma aplicação Node.js o mais desacoplado possível com typescript usando conceitos de S.O.L.I.D e Clean Architecture. Ao final teremos uma api onde poderemos mudar facilmente por exemplo de express para fastify, prisma para typeorm, postgresql para mongoDb mudando apenas a variável de ambiente. Acompanhe essa série e verás.

Nesse primeiro artigo vamos iniciar o projeto e configurar o typescript.

## Criando o projeto:

Vamos iniciar o projeto usando o comando abaixo que irá gerar o arquivo `package.json`. Em qual local vai ficar o projeto na sua máquina é de sua escolha.

```bash
yarn init -y
```
## Instalando devDependencies:

```bash
yarn add @types/node tsup tsx typescript -D
```

Qual a utilidade de cada pacote:

**@types/node**: biblioteca que fornece definições de tipos (TypeScript) para os módulos nativos do Node.js. Ela é usada em projetos TypeScript quando se deseja obter suporte para a verificação de tipos.

**tsx**: biblioteca utilizada para executar arquivos TypeScript (com extensão .ts) diretamente no Node.js, sem a necessidade de compilar previamente os arquivos para JavaScript (extensão .js). O pacote tsx foi aprimorado com *esbuild* para executar arquivos TypeScript e ESM.

**tsup**: é uma ferramenta de empacotamento (bundling) e compilação para projetos TypeScript. Ela facilita a criação de pacotes JavaScript a partir do código TypeScript e é uma alternativa mais simples e minimalista comparada a ferramentas mais complexas de empacotamento, como o Webpack e Rollup.

**typescript**: é uma linguagem(ou preset) para JavaScript. O TypeScript adiciona tipos opcionais ao JavaScript que oferecem suporte a ferramentas para aplicativos JavaScript de grande escala para qualquer navegador, para qualquer host, em qualquer sistema operacional. O TypeScript é compilado para JavaScript legível e baseado em padrões.

## Configurando o typescript:

1. Crie na raiz do projeto um arquivo **tsconfig.json**
2. Adicione ao arquivo o seguinte código:

```js
{
  "compilerOptions": {
    "target": "es2017",
    "strictNullChecks": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "baseUrl": "./src",
    "rootDir": "./",
    "outDir": "./dist",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "strict": true,
  }
}
```

Crie na raiz do projeto o arquivo **.gitignore** com o seguinte conteúdo:

```
node_modules/
```

No final desse primeiro artigo o projeto deverá ter a estrutura abaixo:

![imagem da estrutura de pastas](https://res.cloudinary.com/practicaldev/image/fetch/s--1SVKX_OW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qygsn5m5p0tv0488qx31.png)

Nesse artigo ficamos por aqui. No próximo artigo vamos codar dois server um com fastify e outro com express e alternar entre um e outro mudando apenas uma variável de ambiente.