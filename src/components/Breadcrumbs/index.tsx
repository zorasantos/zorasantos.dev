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
    <nav className="w-full rounded-md">
    <ol className="list-reset flex items-center">
      <li>
        <Link href="/">
          <Image alt="icon home" width={25} src={home_icon} />
        </Link>
      </li>
      <li>
        <Image alt="icon chevron right" width={23} src={chevron_right} />
      </li>
      <li>
        <Link
          href="/"
          className="text-[#556AF3] hover:text-[#1CDAFF]"
          >{page}</Link>
      </li>
      <li>
        <Image alt="icon chevron right" width={23} src={chevron_right} />
      </li>
      <li className="text-gray-700 font-thin text-[13px]">{title}</li>
    </ol>
  </nav>
  )
}