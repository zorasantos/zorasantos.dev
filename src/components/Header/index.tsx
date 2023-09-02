"use client"
import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.png"
import { ThemeSwitcher } from "..";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function Header() {
  const { isHidden, isReachedTop } = useScrollDirection()

  return (
  <header className={`sticky  ${isHidden ? 'top-[-6rem]' : `top-0 ${isReachedTop ? '' : 'shadow-lg'}`} z-10 flex justify-between items-center mb-10 h-24 px-10 md:px-24 backdrop-blur-xl transition-all duration-500 ease-in-out`}>
    <Link tabIndex={0} href="/">
      <Image priority alt="logo" src={Logo} className="w-20 h-16" />
    </Link>
    <nav className="flex gap-5">
      <Link tabIndex={0} href="/about" className="text-gray-700 dark:text-white font-semibold cursor-pointer hover:text-primary-light dark:hover:text-primary-light">Sobre Mim</Link>
      <ThemeSwitcher />
      {/* <Link href="" className="text-gray-700 font-semibold cursor-pointer hover:text-[#85F3E2]">Portfólio</Link> */}
      {/* <a href="" className="text-gray-700 font-semibold cursor-pointer hover:text-[#85F3E2]">Contato</a> */}
    </nav>
  </header>
  )
}