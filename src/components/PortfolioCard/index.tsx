import dynamic from "next/dynamic";
import Link from "next/link";
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
      <Link rel="noopener" className="text-gray-700 dark:text-white font-semibold" href={`portfolio/${slug}`}>
        <ReadMore className="mb-3 [&>svg]:hover:fill-primary-light hover:text-primary-light" text="Mais Detalhes" />
      </Link>
    </>
  )
}