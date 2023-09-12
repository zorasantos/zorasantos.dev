export const artigo1 = [
  { id: "criando-o-projeto", title: "Criando o projeto" },
  { id: "instalando-devdependencies", title: "Instalando devDependencies" },
  { id: "configurando-o-typescript", title: "Configurando o typescript" }
]

export const artigo2 = [
  { id: "criando-o-server-express", title: "Criando o server express" },
  { id: "criando-o-server-com-fastify", title: "Criando o server com fastify" }
]

export const artigo3 = [
  { id: "definindo-a-estrutura-de-pastas", title: "Definindo a estrutura de pastas" },
  { id: "criando-a-entidade", title: "Criando a entidade" },
  { id: "criando-o-repository", title: "Criando o Repository" },
  { id: "criando-o-usecase", title: "Criando o useCase" },
  { id: "criando-o-controller", title: "Criando o Controller" },
  { id: "criando-o-factory", title: "Criando o Factory" },
  { id: "criando-rotas-com-express", title: "Criando rotas com Express" },
  { id: "registrando-as-rotas-do-express", title: "Registrando as rotas do express" },
  { id: "testando-a-requisicao", title: "Testando a requisição" },
  { id: "criando-rotas-com-fastify", title: "Criando rotas com Fastify" },
  { id: "registrando-as-rotas-do-fastify", title: "Registrando as rotas do fastify" },
]

export const artigo4 = [
  { id: "padronizando-as-respostas-e-requisicoes-em-uma-api-node-desacoplada", title: "Padronizando as respostas e requisições" },
  { id: "criando-um-contrato-para-nossos-controllers", title: "Criando um contrato para nossos controllers" },
  { id: "criando-um-contrato-para-o-create-do-crud", title: "Criando um contrato para o CREATE do CRUD" },
  { id: "refatorando-o-controller", title: "Refatorando o controller" }
]

export const bouncy = [
  { id: "codigo-css-completo", title: "Código css completo" }
]

export const getHeadings = (slug: string) => {
  const result = {
    "api-node-desacoplada-parte-01":  artigo1,
    "api-node-desacoplada-parte-02": artigo2,
    "api-node-desacoplada-parte-03": artigo3,
    "api-node-desacoplada-parte-04": artigo4,
    "bouncy-loading-animation": bouncy
  }[slug]
  return result;
}

