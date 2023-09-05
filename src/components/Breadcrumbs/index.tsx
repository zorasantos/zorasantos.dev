import Link from "next/link";
import Image from "next/image";

import chevron_right from "@/assets/chevron_right.svg"
import home_icon from "@/assets/home.svg"

interface BreadcrumbsProps {
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
          <Image alt="icon home" src={home_icon} width={28} height={28} className="w-10 sm:w-7" />
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