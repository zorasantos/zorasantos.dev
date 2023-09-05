import Link from "next/link";
import Image from "next/image";
import arrow_forward from "@/assets/arrow_forward.svg"

type PortfolioCardProps = {
  title: string;
  description: string;
  slug: string;
}

export default function PortfolioCard({ description, title, slug }: PortfolioCardProps) {
  return (
    <>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="mb-4" aria-label="Descrição portfolio card">{description}</p>
      <div className="flex gap-2 mb-3">
        <Image alt="icon arrow forward" src={arrow_forward}  width={24} height={24} className="w-6" />
        <Link className="text-gray-700 dark:text-white dark:hover:text-primary-light font-semibold" href={`portfolio/${slug}`}>Mais Detalhes</Link>
      </div>
    </>
  )
}