---
author: "Zoranildo Santos"
title: "API Node Desacoplada: Criando Interfaces para Requisições e Respostas HTTP"
description: "Neste artigo vamos dar continuidade a nossa série Guia Prático: Aprenda a Construir uma API Node.js Desacoplada."
publishedAt: "01/08/2023"
tags: ["Node", "TypeScript", "API"]
---

Como mencionado no artigo anterior _API Node Desacoplada: Criando Cadastro de Usuários_, nosso controller `CreateSignUpController.ts` está totalmente acoplado. Antes de criar os adaptadores para as rotas vamos alterar nosso controller pra que fique desacoplado e independente de qualquer ferramenta externa.

# Padronizando as respostas e requisições em uma API Node desacoplada

Vamos definir interfaces para as respostas e requisições de nossa api.

1. Crie uma pasta chamada `shared` dentro da pasta `infra`.
2. Dentro da pasta `shared` crie a pasta `protocols`.
3. Dentro da pasta `protocols` crie o arquivo `http.ts`.

Agora no arquivo `http.ts` insira o código abaixo:

<Code language="typescript">
  export type HttpResponse = {
    statusCode: number
    body: unknown
  }

  export type HttpRequest = {
    body?: unknown
    params?: unknown;
    query?: unknown;
  }
</Code>

Detalhes do type `HttpResponse`:

Esse type define a estrutura padrão da resposta que a API enviará para o client após processar uma requisição. Ele possui dois campos:

`statusCode`: É um campo do tipo number que representa o código de status HTTP que será enviado como resposta ao client(EX: 200, 201, 400, 500).

`body`: É um campo do tipo `unknown`, o que significa que a resposta pode conter qualquer tipo de dado. Esse campo armazenará o corpo da resposta enviada ao client, que pode ser, por exemplo, um objeto JSON, uma mensagem de sucesso ou erro, ou até mesmo null, caso a resposta não precise conter um corpo.

Utilizando esse type, padronizamos o formato das respostas enviadas, o que facilita o tratamento das informações pelo client que está consumindo a API.

Detalhes do type `HttpRequest`:

Esse type define a estrutura padrão das requisições que a API receberá do client. Ela possui três propriedades opcionais e do tipo unknown:

`body`: Esta propriedade representa o corpo da requisição HTTP.

`params`: Esta propriedade representa os parâmetros da requisição.

`query`: Essa propriedade representa os parâmetros de consulta (query parameters) da requisição HTTP.

Ao definir a tipagem, estabelecemos um formato padrão para as requisições que a API espera receber, mas permite que o client envie dados de forma flexível, já que as propriedades são opcionais.

Isso permite que a API se adapte a diferentes tipos de requisições sem impor restrições rígidas. Essas duas tipagens, `HttpResponse` e `HttpRequest`, ajudam a promover a separação de responsabilidades e o desacoplamento entre as camadas da aplicação.

# Criando um contrato para nossos controllers

1. Dentro da pasta `protocols` crie o arquivo `IController.ts`
2. No arquivo `IController.ts` insira o seguinte código:

<Code language="typescript">
  import { HttpResponse } from './http'
  // Coloque a tipagem T = unknown dentro de <>
  export interface IController<> {
    // Coloque a tipagem da Promise => HttpResponse
    handle(request: T): Promise<>

    // Ele recebe um parâmetro chamado request do tipo genérico T,
    // que representa o objeto de requisição que será passado para o
    // controlador. O método retorna uma Promise que resolve o
    // HttpResponse
  }
</Code>

Essa interface `IController` serve como um contrato que deve ser implementado por qualquer classe que atue como um controlador na aplicação. Ao utilizar essa interface, você pode definir vários controladores para diferentes rotas ou recursos da API, mas garantindo que todos eles sigam o mesmo padrão de implementação e retornem uma resposta do tipo `HttpResponse`.

A vantagem dessa abordagem é a padronização e a flexibilidade que ela proporciona. Essa abstração ajuda a manter o código organizado, facilita a criação de novos controladores e torna a API mais flexível, permitindo a fácil substituição ou adição de controladores sem modificar a lógica central da aplicação.

# Criando um contrato para o CREATE do CRUD

1. Dentro da pasta `shared` crie o arquivo `httpHelper.ts`
1. No arquivo `httpHelper.ts` insira o seguinte código:

<Code language="typescript">
  import { HttpResponse } from '../protocols/http'
  export const create = (data: unknown): HttpResponse => ({
    statusCode: 201,
    body: data
  })
</Code>

A função `create` é exportada e recebe um parâmetro `data` do tipo unknown. O tipo `unknown` indica que a função pode receber qualquer tipo de dado.

A função retorna um objeto do tipo `HttpResponse`, conforme definido pela interface importada na linha acima.

O objeto retornado pela função create possui dois campos:

`statusCode`: Representa o código de status HTTP a ser enviado como resposta ao cliente. Neste caso, o valor 201 indica que a requisição foi bem-sucedida e resultou na criação de um novo recurso (usualmente utilizado após uma operação de criação, como um POST).

`body`: O body é definido com o valor do parâmetro `data` recebido pela função. Isso significa que o conteúdo do body será igual ao valor do parâmetro data passado para a função `create`. O body armazenará o corpo da resposta enviada ao cliente, que pode ser qualquer tipo de dado, incluindo objetos JSON, strings, arrays ou até mesmo null.

A função `create` é útil para padronizar a criação de respostas no formato `HttpResponse`, tornando mais fácil e claro o envio de respostas para o client. Outros contratos podem ser criados para update, read e delete com o statusCode 200.

# Refatorando o controller

Código antes da refatoração:

Perceba que o controller está acoplado ao `express`. Imagine que a aplicação tem dezenas de controllers, se por acaso for necessário mudar o framework, teríamos muito trabalho pra fazer alterando essa tipagem manualmente em todos os controllers.

<Code language="typescript">
  import { Response, Request } from "express"
  import { CreateSignUpUseCase } from './CreateSignUpUseCase'

  interface ICreateSignUpDTO {
    name: string
    password: string
  }

  export class CreateSignUpController {
    constructor(private readonly useCase: CreateSignUpUseCase) {}

    // Coloque a tipagem da Promise => Response
    async handle(req: Request, res: Response): Promise<> {
      const { name, password } = req.body as ICreateSignUpDTO

      const data = { name, password }
      await this.useCase.execute(data)

      return res.status(201).send({ message: 'User created successfully' })
    }
  }
</Code>

Código refatorado:


<Code language="typescript">
  import { CreateSignUpUseCase } from './CreateSignUpUseCase'
  import { IController } from '../../../../../infra/shared/protocols/controller'
  import { HttpRequest, HttpResponse } from '../../../../../infra/shared/protocols/http'
  import { create } from '../../../../../infra/shared/protocols/httpHelper'

  interface ICreateSignUpDTO {
    name: string
    password: string
  }

  export class CreateSignUpController implements IController {
    constructor(private readonly useCase: CreateSignUpUseCase) {}

    // Coloque a tipagem da Promise => HttpResponse
    async handle(request: HttpRequest): Promise<> {
      const { name, password } = request.body as ICreateSignUpDTO

      const data = { name, password }
      const useCase = await this.useCase.execute(data)

      return create(useCase)
    }
  }
</Code>

Com a refatoração, mesmo se a aplicação tiver dezenas de controllers a alteração a ser feita será apenas na camada de infraestrutura, claro, isso se todos os controllers tiverem sido criados seguindo o contrato definido.

Esse foi um belo trabalho. Mesmo assim ainda não é possível alternar entre `express` e `fastify`, ainda precisamos criar os adaptadores, o que será feito no próximo artigo.