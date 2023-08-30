---
author: "Zoranildo Santos"
title: "API Node Desacoplada: Criando Cadastro de Usuários"
description: "Neste artigo vamos dar continuidade a nossa série Guia Prático: Aprenda a Construir uma API Node.js Desacoplada."
publishedAt: "28/07/2023"
tags: ["Node", "TypeScript", "API"]
---

Neste artigo vamos dar continuidade a nossa série _Guia Prático: Aprenda a Construir uma API Node.js Desacoplada_ e criar um simples endpoint para cadastro de usuários. Por mais que seja simples vamos abordar métodos essenciais para termos um código limpo e desacoplado.

Lembrando que nesse artigo vamos criar essa feature como normalmente vemos em alguns cursos e vídeos no youtube ferindo os princios `S.O.L.I.D`. No próximo artigo aí sim, vamos refatorar essa feature seguindo os princípios do S.O.L.I.D, com isso você terá uma ideia do que muda no código e porque.

# Definindo a estrutura de pastas

> A estrutura de pastas usada nesse projeto é uma escolha pessoal, você pode usar outra estutura, o importante é entender os conceitos e metodologias utilizadas.

Vamos criar dentro de `src` uma pasta chamada `application`. A ideia é de ser possível mudar qualquer framework ou ferramenta da infraestrutura sem mudar uma linha sequer no código da nossa aplicação.

Dentro de `application` vamos criar uma pasta chamada `modules` e dentro de modules vamos criar pastas de acordo com as nossas features que por sua vez terá uma estrutura particular.

A feature que vamos desenvolver agora é um endpoint para cadastrar usuários, então dentro da pasta `modules` vamos criar outra chamada `SignUp`. Dentro da pasta `SignUp` vamos criar mais três pastas, `entitie`, `repository`, `useCase`.

Ao final deveremos ter a seguinte estrutura de pastas:

![estrutura de pastas](https://res.cloudinary.com/doampncx5/image/upload/v1693326619/Screenshot_2023-07-27_123534.png)

# Criando a entidade

Esta camada contém as entidades principais e os objetos de negócios do sistema. As entidades encapsulam as regras de negócios e são independentes das camadas externas.

Dentro da pasta `entitie` crie o arquivo `User.ts` e insira o código abaixo:

> Escrevemos comentários dentro do código explicando detalhadamente cada linha.

<Code language="typescript">

    import { randomUUID } from 'node:crypto'

    // Importa a função do randomUUID do pacote Node.js crypto para
    // gerar um identificador único para cada objeto User.

    export interface IUserProps {
      name: string
      password: string;
    }

    // Essa interface descreve a estrutura esperada para as
    // propriedades do usuário. Ela define que o objeto user deve ter
    // duas propriedades: name (que deve ser uma string) e password
    // (que também deve ser uma string).

    export class User {
    // A classe User é declarada e contém as propriedades e métodos
    // relacionados ao usuário.

    private _id: string
    private _createdAt: Date
    private _updatedAt: Date
    private props: IUserProps

    // A classe possui três propriedades privadas: _id, _createdAt e
    // _updatedAt, que armazenam o identificador único, a data de
    // criação e a data de atualização, respectivamente.

    // Além das propriedades privadas, também há uma propriedade
    // props, que armazena um objeto do tipo IUserProps. Essa
    // propriedade é usada para armazenar os dados de nome (name) e
    // senha (password) do usuário.

    constructor(props: IUserProps) {
      this._id = randomUUID()
      this._createdAt = new Date()
      this._updatedAt = new Date()
      this.props = props
    }

    // O construtor da classe recebe um objeto do tipo IUserProps
    // como argumento. Ele é responsável por inicializar as
    // propriedades _id, _createdAt e _updatedAt, além de armazenar as
    // propriedades name e password passadas no objeto props.

    public get id() {
      return this._id
    }

    public set name(name: string) {
      this.props.name = name
    }

    public get name(): string {
      return this.props.name
    }

    public set password(password: string) {
      this.props.password = password
    }

    public get password(): string {
      return this.props.password
    }

    public get createdAt(): Date {
      return this._createdAt
    }

    public get updatedAt(): Date {
      return this._updatedAt
    }

    // A classe define os getters e setters para permitir o acesso
    // controlado às propriedades.

    // Os getters são métodos que permitem obter o valor das
    // propriedades, enquanto os setters são métodos que permitem
    // definir os valores das propriedades.

    // O uso de getters e setters é uma forma de encapsular as
    // propriedades da classe e controlar como elas são acessadas e
    // modificadas. Isso é útil para garantir a integridade dos dados
    // e aplicar lógicas adicionais ao acessar ou definir essas
    // propriedades.
    }
</Code>

# Criando o Repository

Na Clean Architecture, o repositório é uma camada intermediária que separa a lógica de negócios (casos de uso) da implementação específica de como os dados são armazenados e recuperados. O repositório pertence à camada de `"Frameworks & Drivers"` na Clean Architecture.

Aqui nosso `UserRepository` está na camada `application`, mas nos próximos artigos vamos levá-lo para a camada mais externa e vamos acessá-lo por meio de `interfaces`.

Dentro da pasta `repository` crie o arquivo `UserRepository.ts` e insira o código abaixo:

<Code language="typescript">

  import { User } from '../entitie/User'

    export class UserRepository {
      public users: User[] = []
      // Coloque a tipagem da Promise => void
      async create(data: User): Promise<> {
        this.users.push(data)
      }
    }
</Code>

# Criando o useCase

Dentro da pasta `useCases` vamos criar uma nova pasta que levará o nome do nosso caso de uso que é o cadastro de um novo usuário, ou seja, crie uma pasta chamada `CreateSignUp`.

Dentro da pasta `CreateSignUp` crie o arquivo `CreateSignUpUseCase.ts` e insira o código abaixo:

<Code language="typescript">

  import { User } from '../../entitie/User'
  import { UserRepository } from '../../repository/UserRepository'

  interface IRequest {
    name: string
    password: string
  }

  export class CreateSignUpUseCase {
    constructor(private repository: UserRepository) {}
    // Coloque a tipagem da Promise => void
    async execute(request: IRequest): Promise<> {
      const { name, password } = request

      const user = new User({
        name,
        password,
      })

      await this.repository.create(user)
    }
  }
</Code>

# Criando o Controller

Os `controllers` são responsáveis por controlar os acessos a nossa aplicação ou seja fazem a ponte entre as ações da interface do usuário e os `casos de uso`.

Crie dentro da pasta `CreateSignUp` o arquivo `CreateSignUpController.ts` e insira o código abaixo:

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

# Criando o Factory

As factories têm a responsabilidade de criar instâncias de objetos complexos, como entidades ou objetos de valor, de acordo com as regras de criação e configuração definidas pela lógica de negócios. No nosso projeto
a `factory` cria uma instância do controlador `CreateSignUpController`, que encapsula toda a lógica relacionada à criação de um novo usuário.

Existem bibliotecas como a `tsyringe` que fazem o trabalho de uma factory, traz algumas facilidade e tornaria possível excluir todo o código da factory do nosso projeto, mas isso geraria um acoplamento que obviamente não queremos.

Crie dentro da pasta `CreateSignUp` o arquivo `CreateSignUpFactory.ts` e insira o código abaixo:

<Code language="typescript">
  import { UserRepository } from '../../repository/UserRepository'
  import { CreateSignUpController } from './CreateSignUpController'
  import { CreateSignUpUseCase } from './CreateSignUpUseCase'

  export const CreateSignUpFactory = (): CreateSignUpController => {
    const repository = new UserRepository()
    const useCase = new CreateSignUpUseCase(repository)
    const controller = new CreateSignUpController(useCase)

    return controller
  }
</Code>

# Criando rotas com Express

Aqui nosso projeto vai ferir mais alguns princípios, mas tudo bem, vamos corrigir isso nos próximos artigos.

Dentro da pasta `infra` crie uma nova pasta chamada `routes` e dentro crie dois arquivo `signUp.routes.ts` e `index.ts`.

Insira no arquivo `signUp.routes.ts` o código abaixo:

<Code language="typescript">
  import { Router } from 'express'
  import { CreateSignUpFactory } from '../../application/modules/SignUp/useCases/CreateSignUp/CreateSignUpFactory'

  const signupRoutes = Router()

  signupRoutes.post('/signup', (req, res) =>  CreateSignUpFactory().handle(req, res))

  export { signupRoutes }
</Code>

Insira no arquivo `index.ts` o código abaixo:

<Code language="typescript">

  import { Router } from 'express'

  import { signupRoutes } from './signUp.routes'


  const router = Router()

  router.use('/v1', signupRoutes)

  export { router }
</Code>

# Registrando as rotas do express

Feito isso é necessário registrar as rotas no server do express. Atualize o arquivo `index.ts`(`src/infra/ports/express/index.ts`) do express com o código abaixo:

<Code language="typescript">

  import 'dotenv/config'
  import express from 'express'
  import { router } from '../../routes'

  const PORT = 5000

  const app = express()

  // código novo
  app.use(express.json())
  app.use(router)
  //

  // Substitua as aspas simples por acento grave (`)
  app.listen(PORT, () => {
    console.log('Express app listening on port ${PORT}')
  })

  export { app }
</Code>

`app.use(express.json())`: O middleware `express.json()` é um middleware embutido no Express que é usado para analisar o corpo das requisições HTTP com o formato JSON. Ele verifica o corpo da requisição e, se encontrar dados JSON válidos, os converte em um objeto JavaScript, que é então acessível através do objeto `req.body`.

Quando você usa app.use(express.json()), você está adicionando esse middleware à instância do servidor, o que significa que todas as rotas que estão definidas após esta chamada terão acesso aos dados JSON enviados no corpo das requisições e poderão acessá-los através do `req.body`.

`app.use(router)`: Nesta linha, estamos usando outro middleware, mas em vez de usar um middleware embutido como express.json(), estamos usando um middleware personalizado chamado `router`. Esse router é uma instância do express.Router() que foi definida nos arquivos dentro da pasta `routes` para organizar as rotas da nossa aplicação.

O express.Router() permite agrupar as rotas relacionadas em um único objeto, tornando mais fácil definir e organizar as rotas em diferentes arquivos, o que ajuda a manter o código limpo e modularizado.

# Testando a requisição

Muito bem, agora é hora de testar a aplicação desenvolvida até aqui. Use alguma ferramenta como insomnia ou postman para testar a requisição.

Primeiro confira se o valor da variável `SERVER_TYPE` no arquivo `.env` é `express` e suba a aplicação rodando o comando `yarn start:dev` no terminal. A url pra acessar é essa: `http://localhost:5000/v1/signup`. Se tudo estiver certo até aqui deveremos ter esse resultado:

![imagem do insomnia](https://res.cloudinary.com/doampncx5/image/upload/v1693329551/Screenshot_2023-07-27_175518.png)

Se colocarmos um `console.log` no repository veremos o objeto que foi criado e salvo na memória, então altere o arquivo `UserRepository.ts` inserindo um `console.log`:

<Code language="typescript">
  ...
  // Promise é do tipo void
  async create(data: User): Promise<> {
    this.users.push(data)
    console.log("Objeto salvo na memória", this.users)
  }
...
</Code>

![log do express no terminal](https://res.cloudinary.com/doampncx5/image/upload/v1693329827/Screenshot_2023-07-27_175958.png)

Agora faça o seguinte teste:

1. Pare a aplicação:
2. Mude o valor da variável `SERVER_TYPE` para fastify.
3. Inicialize a aplicação novamente rodando o comando `yarn start:dev` no terminal.

![log fastify error no terminal](https://res.cloudinary.com/doampncx5/image/upload/v1693329958/Screenshot_2023-07-27_191253.png)

Com isso nosso app não vai conseguir criar um novo cadastro de usuário pois não vai encontrar a rota definida, tendo em vista que essa rota só existe no express. Para o nosso app rodar sem problemas tanto com express, quanto com o fastfy teremos que criar o roteamento do fastify.

# Criando rotas com Fastify

Dentro da pasta `routes` Crie duas novas pastas `express` e `fastify`.

Mova os arquivos `index.ts` e `signUp.routes.ts` que estão dentro da pasta `routes` para a pasta `express`.

No arquivo `signUp.routes.ts` altere o path que importa o arquivo `CreateSignUpFactory.ts`.

<Code language="typescript">
  // Antes
  import { CreateSignUpFactory } from '../../application/modules/SignUp/useCases/CreateSignUp/CreateSignUpFactory'

  // Depois
  import { CreateSignUpFactory } from '../../../application/modules/SignUp/useCases/CreateSignUp/CreateSignUpFactory'
</Code>

No arquivo `index.ts` dentro da pasta `express` que fica dentro da pasta `ports`, altere o path que importa o arquivo de rotas.

<Code language="typescript">
  // Antes
  import { router } from '../../routes'

  // Depois
  import { router } from '../../routes/express'
</Code>

Antes de continuar confira se a aplicação continua rodando.

Depois de feito a refatoração acima, finalmente vamos criar a rota. Dentro da pasta `fastify` que fica dentro de `routes` crie o arquivo `index.ts` e insira o seguinte código:

<Code language="typescript">
  import { FastifyPluginAsync } from 'fastify'
  import { CreateSignUpFactory } from '../../../application/modules/SignUp/useCases/CreateSignUp/CreateSignUpFactory'

  // Coloque a tipagem da promise => void
  export const signUpRouter: FastifyPluginAsync = async (
    fastify
  ): Promise<> => {
    fastify.post('/signup', (req, res) => CreateSignUpFactory().handle(req, res))
  }
</Code>

A estrutura de pastas até aqui deverá ser essa:

![estrutura de pastas](https://res.cloudinary.com/doampncx5/image/upload/v1693349497/Screenshot_2023-07-27_214243.png)

# Registrando as rotas do fastify

Depois de criada a rota é necessário registrá-la. No arquivo `index.ts` dentro da pasta `fastify` que fica dentro da pasta `ports`(src/infra/ports/fastify/index.ts) importe o arquivo de rotas e registre na instância do fastify. Com a atualização o arquivo ficará assim:

<Code language="typescript">
  import 'dotenv/config'
  import fastify from 'fastify'
  // Código novo: importa o arquivo de rota do fastify
  import { signUpRouter } from '../../routes/fastify/index'

  const server = fastify({ logger: true })

  // Código novo: registra a rota na instância criada
  server.register(signUpRouter, { prefix: '/v1' })

  const app = async () => {
    try {
      server.listen({
        host: '0.0.0.0',
        port: process.env.PORT_SERVER ? Number(process.env.PORT_SERVER) : 5000,
      })
      // Nessa linha substituir as aspas simples por acento grave(`)
      console.log('Server fastify running in port ${5000}')
    } catch (error) {
      console.error('Erro server fastify', error)
    }
  }

  app()
</Code>

Isso ainda não é o suficiente pra nossa aplicação funcionar com o fastify. Como já mencionei, nosso controller(CreateSignUpController.ts) está totalmente acoplado ao express e o fastify tem tipagens e métodos diferentes. Mas pra testarmos a aplicação funcionando com o fastify, vamos fazer uma pequena alteração no `CreateSignUpController.ts`.

No controller vamos remover o import da tipagem do express e importar a tipagem do fastify.

<Code language="typescript">
  // código para remover
  import { Response, Request } from "express"
  // Código novo
  import { FastifyRequest, FastifyReply } from 'fastify'

  import { CreateSignUpUseCase } from './CreateSignUpUseCase'

  interface ICreateSignUpDTO {
    name: string
    password: string
  }

  export class CreateSignUpController {
    constructor(private readonly useCase: CreateSignUpUseCase) {}

  // aqui no lugar das tipagens do express(Request, Reponse) colocamos a tipagem do fastify(FastifyRequest, FastifyReply)

    // Coloque a tipagem da Promise => "Response"
    async handle(req: FastifyRequest, res: FastifyReply): Promise<> {
      const { name, password } = req.body as ICreateSignUpDTO

      const data = { name, password }
      await this.useCase.execute(data)

      return res.status(201).send({ message: 'User created successfully' })
    }
  }
</Code>

Com isso podemos testar a requisição. Se tudo estiver certo a resposta no insomnia será a mesma do teste anterior com express e o `console.log` que está no repository terá essa saída no terminal:

![log do fastify no terminal](https://res.cloudinary.com/doampncx5/image/upload/v1693350040/Screenshot_2023-07-27_220733.png)

Se você observar bem, depois de deixar a aplicação funcionado com o fastify, o arquivo `signUp.routes.ts` tem um erro de tipagem. Isso ocorre porque no controller(CreateSignUpController.ts) estamos usando o fastify e no arquivo `signUp.routes.ts` estamos usando o express. Pra resolver isso precisamos criar adaptadores pra que nossa aplicação consiga funcionar seja com fastify, seja com express sem a necessidade de alterar o controller(CreateSignUpController.ts).

Ficamos por aqui. Apesar da nossa aplicação estar ferindo alguns princípios, temos algo já bem estruturado e modularizado. Até o próximo artigo.