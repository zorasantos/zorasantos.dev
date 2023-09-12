import Link from "next/link";
import Image from "next/image";
import chevron_right from "@/assets/chevron_right.svg"

type BreadcrumbsProps = {
  title: string;
  page: string
}

export default function Breadcrumbs({ page, title }: BreadcrumbsProps) {
  const path = page === 'Blog' ? '/' : `/${page.toLowerCase()}`

  return (
    <nav role="navigation" className="w-full rounded-md" aria-label="Breadcrumb">
    <ol className="list-reset flex items-center">
      <li>
        <Link rel="noopener" tabIndex={0} href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="home icon"
          className="fill-primary dark:fill-primary-dark hover:fill-primary-light dark:hover:fill-primary-light h-7 w-7 sm:w-7"
          fill="none"
          viewBox="0 -960 960 960"
        >
          <path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/>
        </svg>
        </Link>
      </li>
      <li>
        <Image alt="icon chevron right" src={chevron_right} width={32} height={32} className="w-12 sm:w-8" />
      </li>
      <li>
        <Link
          rel="noopener"
          tabIndex={0}
          href={path}
          aria-current="page"
          className="text-primary dark:text-primary-dark hover:text-primary-light dark:hover:text-primary-light"
          >{page}</Link>
      </li>
      <li>
        <Image alt="icon chevron right" src={chevron_right} width={32} height={32} className="w-12 sm:w-8" />
      </li>
      <li className="font-normal text-sm line-clamp-2">{title}</li>
    </ol>
  </nav>
  )
}