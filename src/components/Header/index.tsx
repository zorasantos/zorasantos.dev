import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.png"

export default function Header() {

  return (
  <header className="flex justify-between items-center mb-10 h-32">
    <Link href="/">
      <Image alt="logo" src={Logo} className="w-20 h-16" />
    </Link>
    <nav className="flex gap-5">
      <Link href="/about" className="text-gray-700 font-semibold cursor-pointer hover:text-[#1CDAFF]">Sobre Min</Link>
      <a href="" className="text-gray-700 font-semibold cursor-pointer hover:text-[#1CDAFF]">Portfólio</a>
      <a href="" className="text-gray-700 font-semibold cursor-pointer hover:text-[#1CDAFF]">Contato</a>
    </nav>
  </header>
  )
}