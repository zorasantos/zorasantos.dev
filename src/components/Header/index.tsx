"use client"
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic"
import Logo from "@/assets/logo.png"
import { useScrollDirection } from "@/hooks/useScrollDirection";

const ThemeSwitcher = dynamic(() => import("../ThemeSwitcher"))

export default function Header() {
  const { isHidden, isReachedTop } = useScrollDirection()

  return (
  <header className={`sticky  ${isHidden ? 'top-[-6rem]' : `top-0 ${isReachedTop ? '' : 'shadow-lg'}`} z-10 flex justify-between items-center mb-10 h-24 px-10 md:px-24 backdrop-blur-xl transition-all duration-500 ease-in-out`}>
    <Link rel="noopener" tabIndex={0} href="/">
      <Image priority alt="logo" src={Logo} width={80} height={64} className="w-20 h-16" />
    </Link>
    <nav className="flex gap-5">
      <Link rel="noopener" tabIndex={0} href="/about" className="text-gray-700 dark:text-white font-semibold cursor-pointer hover:text-primary-light dark:hover:text-primary-light">Sobre Mim</Link>
      <Link rel="noopener" href="/portfolio" className="text-gray-700 font-semibold cursor-pointer dark:text-white hover:text-primary-light dark:hover:text-primary-light">Portfólio</Link>
      {/* <a href="" className="text-gray-700 font-semibold cursor-pointer hover:text-[#85F3E2]">Contato</a> */}
      <ThemeSwitcher />
    </nav>
  </header>
  )
}