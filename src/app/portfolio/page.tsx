import { PortfolioCard } from "@/components";
import { getPortfolioMetadata } from "@/utils";

export default function Portfolio() {

  const portfolioMetadata = getPortfolioMetadata();
  const portfolioPreviews = portfolioMetadata.map((item) => (
    <PortfolioCard key={item.title} {...item} />
  ));

  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Portfólio</h1>
        <span>Abaixo listo alguns dos projetos que já trabalhei:</span>
      </div>
      <div>{portfolioPreviews}</div>
    </>
  )
}