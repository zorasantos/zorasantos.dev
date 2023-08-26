export const artigo1 = [
  { id: "criando-o-projeto", title: "Criando o projeto" },
  { id: "instalando-devdependencies", title: "Instalando devDependencies" },
  { id: "configurando-o-typescript", title: "Configurando o typescript" }
]

export const artigo2 = [
  { id: "criando-o-server-express", title: "Criando o server express" },
  { id: "criando-o-server-com-fastify", title: "Criando o server com fastify" }
]

export const bouncy = [
  { id: "codigo-css-completo", title: "Código css completo" }
]

export const getHeadings = (slug: string) => {
  const result = {
    "api-node-desacoplada-parte-01":  artigo1,
    "api-node-desacoplada-parte-02": artigo2,
    "bouncy-loading-animation": bouncy
  }[slug]
  return result;
}

