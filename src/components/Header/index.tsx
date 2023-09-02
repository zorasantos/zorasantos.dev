"use client"
import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.png"
import { ThemeSwitcher } from "..";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function Header() {
  const { isHidden } = useScrollDirection()

  return (
  <header className={`sticky ${isHidden ? 'top-[-6rem]' : `top-0 backdrop-blur-xl dark:backdrop-blur-xl`} z-10 flex justify-between items-center mb-10 h-24 transition-all ease-in-out duration-500`}>
    <Link tabIndex={0} href="/">
      <Image priority alt="logo" src={Logo} className="w-20 h-16" />
    </Link>
    <nav className="flex gap-5">
      <Link tabIndex={0} href="/about" className="text-gray-700 dark:text-white font-semibold cursor-pointer hover:text-[#85F3E2]">Sobre Mim</Link>
      <ThemeSwitcher />
      {/* <Link href="" className="text-gray-700 font-semibold cursor-pointer hover:text-[#85F3E2]">Portfólio</Link> */}
      {/* <a href="" className="text-gray-700 font-semibold cursor-pointer hover:text-[#85F3E2]">Contato</a> */}
    </nav>
  </header>
  )
}