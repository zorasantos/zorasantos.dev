import dynamic from "next/dynamic";
const ReadMore = dynamic(() => import("@/components/ReadMore"))

type PortfolioCardProps = {
  title: string;
  description: string;
  slug: string;
}

export default function PortfolioCard({ description, title, slug }: PortfolioCardProps) {
  return (
    <>
      <span className="text-xl font-bold mb-3 text-primary dark:text-primary-dark">{title}</span>
      <p className="mb-4" aria-label="Descrição portfolio card">{description}</p>
      <ReadMore className="mb-3" text="Mais Detalhes" slug={slug} />
    </>
  )
}