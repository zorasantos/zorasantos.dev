import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: 'Sobre Mim',
  description: 'Breves palavras sobre eu',
}

export default function About() {
  return (
    <>
      <h3 className="text-2xl font-bold mb-8">Sobre Mim</h3>
      <div className="flex flex-col gap-5 text-justify text-lg text-[#2D3748]">
        <p>
          Olá! me chamo <strong className="dark:text-primary-dark">Zoranildo Santos</strong>, um apaixonado por desenvolvimento de software, com uma ampla experiência
          como Full Stack Developer. Com anos de prática no desenvolvimento de aplicativos web, adquiri habilidades sólidas
          em tecnologias e frameworks modernos como JavaScript, Typescript, Banco de dado SQL e noSQL, NodeJS, ReactJS, VueJS, AWS, Docker entre outras.
        </p>
        <p>
          Minha abordagem é focada na construção de soluções eficientes e escaláveis, sempre mantendo a usabilidade
          e a experiência do usuário como prioridade. Fui muito impactado pela primeira aplicação em que atuei na minha carreira,
          trata-se do <strong className="dark:text-primary-dark">Portal do Contribuinte</strong>, um app para uso da população em geral, que revolucionou a relação dos
          contribuintes com a <strong className="dark:text-primary-dark">Procuradoria Geral do Estado do Ceará</strong>. Com o desenvolvimento do Portal tornou-se
          possível ao contribuinte, por exemplo, marcar reuniões e fazer requerimentos, que antes só era possível presencialmente.
        </p>
        <p>
          Além do código, tenho um forte interesse em arquitetura de software. Minha paixão pelo desenvolvimento web
          me impulsiona a explorar novas tecnologias e tendências para estar sempre à frente no cenário dinâmico da web.
        </p>
      </div>
      <h3 className="text-2xl font-bold mb-8 mt-8">Formação Acadêmica</h3>
      <div className="flex flex-col gap-5 text-justify text-lg text-[#2D3748]">
        <div className="flex flex-col">
          <span><strong>Pós-graduação - Arquitetura de Soluções</strong>, em andamento (Iniciado em 09/2023) </span>
          <span><strong>PUC/Minas</strong> - Pontifícia Universidade Católica de Minas Gerais</span>
        </div>
        <div className="flex flex-col">
          <span><strong>Licenciatura em Filosofia</strong>,  concluído em 2017</span>
          <span><strong>UFC</strong> - Universidade Federal do Ceará</span>
        </div>
      </div>
    </>
  )
}