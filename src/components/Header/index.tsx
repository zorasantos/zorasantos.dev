import Image from "next/image";
import Logo from "../../../public/logo.png"
import Link from "next/link";

export default function Header() {
  return (
  <header className="flex justify-between items-center mb-10 h-32">
    <Link href="/">
      <Image alt="logo" src={Logo} className="w-20 h-16" />
    </Link>
    <nav className="flex gap-5">
      <a href="" className="text-[#3A3748] font-semibold cursor-pointer">Sobre Min</a>
      <a href="" className="text-[#3A3748] font-semibold cursor-pointer">Portfólio</a>
      <a href="" className="text-[#3A3748] font-semibold cursor-pointer">Contato</a>
    </nav>
  </header>
  )
}