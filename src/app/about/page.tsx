import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: 'Sobre Mim',
  description: 'Breves palavras sobre eu',
}

export default function About() {
  return (
    <>
      <div className="flex items-center gap-3 mb-10">
        <h3 className="text-2xl font-bold">Sobre Mim</h3>
        <hr className="w-36" />
      </div>
      <div className="flex flex-col gap-5 text-justify text-lg text-[#2D3748]">
        <p>
          Olá! me chamo <strong>Zoranildo Santos</strong>, um apaixonado por desenvolvimento de software, com uma ampla experiência
          como Full Stack Developer. Com anos de prática no desenvolvimento de aplicativos web, adquiri habilidades sólidas
          em tecnologias e frameworks modernos como JavaScript, Typescript, Banco de dado SQL e noSQL, NodeJS, ReactJS, VueJS, AWS, Docker entre outras.
        </p>
        <p>
          Minha abordagem é focada na construção de soluções eficientes e escaláveis, sempre mantendo a usabilidade
          e a experiência do usuário como prioridade. Fui muito impactado pela primeira aplicação que desenvolvi na minha carreira,
          trata-se do <strong>Portal do Contribuinte</strong>, um app para uso da população em geral, que revolucionou a relação dos
          contribuintes com a <strong>Procuradoria Geral do Estado do Ceará</strong>. Com o desenvolvimento do Portal tornou-se
          possível ao contribuinte, por exemplo, marcar reuniões e fazer requerimentos, que antes só era possível presencialmente.
        </p>
        <p>
          Além do código, tenho um forte interesse em arquitetura de software. Minha paixão pelo desenvolvimento web
          me impulsiona a explorar novas tecnologias e tendências para estar sempre à frente no cenário dinâmico da web.
        </p>
      </div>
    </>
  )
}