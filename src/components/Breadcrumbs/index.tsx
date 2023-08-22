import Link from "next/link";
import chevron_right from "../../../public/chevron_right.svg"
import home_icon from "../../../public/home.svg"
import Image from "next/image";

interface BreadcrumbsProps {
  title: string;
  page: string
}

export default function Breadcrumbs({ page, title }: BreadcrumbsProps) {
  return (
    <nav className="w-full rounded-md" aria-label="Breadcrumb">
    <ol className="list-reset flex items-center">
      <li>
        <Link href="/">
          <Image alt="icon home" src={home_icon} className="w-10 sm:w-7" />
        </Link>
      </li>
      <li>
        <Image alt="icon chevron right" src={chevron_right} className="w-12 sm:w-8" />
      </li>
      <li>
        <Link
          href="/"
          className="text-[#556AF3] hover:text-[#1CDAFF]"
          >{page}</Link>
      </li>
      <li>
        <Image alt="icon chevron right" src={chevron_right} className="w-12 sm:w-8" />
      </li>
      <li className="text-gray-700 font-thin text-[13px] line-clamp-2">{title}</li>
    </ol>
  </nav>
  )
}