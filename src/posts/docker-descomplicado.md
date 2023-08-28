---
author: "Zoranildo Santos"
title: "Docker Descomplicado: Um Resumo Prático dos Principais Comandos"
description: "Aprenda os comandos mais usados do docker"
publishedAt: "18/07/2023"
tags: ["docker", "devops"]
---

O Docker é uma plataforma de código aberto usada para criar, gerenciar e executar aplicativos em contêineres. Nas linhas abaixo vamos apresentar um resumo dos comandos essenciais do Docker com explicações para cada um deles:

<Code language="bash">
  docker version
</Code>

Exibe a versão do Docker instalada no sistema.

<Code language="bash">
  docker info
</Code>

Fornece informações detalhadas sobre o ambiente do Docker, como número de contêineres, imagens, redes etc.

<Code language="bash">
  docker pull <nome_da_imagem>
</Code>

Baixa uma imagem do Docker Hub ou de um registro especificado para o seu sistema local.

<Code language="bash">
  docker build -t <nome_da_imagem> <caminho_do_Dockerfile>
</Code>

Constrói uma nova imagem a partir de um arquivo Dockerfile no diretório especificado, e atribui a ela um nome com a opção "-t".

<Code language="bash">
  docker run <nome_da_imagem>
</Code>

Executa um contêiner a partir de uma imagem especificada.

<Code language="bash">
  docker ps
</Code>

Lista todos os contêineres em execução no momento.

<Code language="bash">
  docker ps -a
</Code>

Lista todos os contêineres, incluindo os que estão parados.

<Code language="bash">
  docker stop <ID_do_contêiner>
</Code>

Interrompe a execução de um contêiner especificado pelo seu ID.

<Code language="bash">
  docker start <ID_do_contêiner>
</Code>

Inicia um contêiner que esteja parado, especificado pelo seu ID.

<Code language="bash">
  docker restart <ID_do_contêiner>
</Code>

Reinicia um contêiner em execução, especificado pelo seu ID.

<Code language="bash">
  docker rm <ID_do_contêiner>
</Code>

Remove um contêiner especificado pelo seu ID. (O contêiner deve estar parado)

<Code language="bash">
  docker rmi <nome_da_imagem>
</Code>

Remove uma imagem específica do sistema local.

<Code language="bash">
  docker images
</Code>

Lista todas as imagens disponíveis no sistema local.

<Code language="bash">
  docker exec -it <ID_do_contêiner> <comando>
</Code>

Executa um comando dentro de um contêiner em execução. A opção "-it" permite a interação com o terminal do contêiner.

<Code language="bash">
  docker logs <ID_do_contêiner>
</Code>

Exibe os logs de um contêiner específico.

<Code language="bash">
  docker buildx create --use
</Code>

Cria um novo builder do tipo Buildx e torna-o o builder padrão.

<Code language="bash">
  docker-compose up
</Code>

Cria e inicia todos os serviços definidos em um arquivo docker-compose.yml.

<Code language="bash">
  docker network create <nome_da_rede>
</Code>

Cria uma nova rede personalizada para os contêineres.

<Code language="bash">
  docker system prune
</Code>

Remove todos os recursos não utilizados, como contêineres parados, imagens não utilizadas, volumes e redes não utilizados.

Esses são alguns dos comandos mais úteis do Docker para começar a trabalhar com contêineres. Lembre-se de que o Docker oferece muitos outros comandos e opções, e a documentação oficial é uma excelente fonte de informações adicionais.

<a href="https://docs.docker.com/get-started/docker_cheatsheet.pdf" target="_blank">CLI Cheat Sheet oficial do docker.</a>

