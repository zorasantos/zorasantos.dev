"use client"
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic"
import Logo from "@/assets/logo.png"
import { useScrollDirection } from "@/hooks/useScrollDirection";

const ThemeSwitcher = dynamic(() => import("../ThemeSwitcher"))

export default function Header() {
  const { isHidden, isReachedTop } = useScrollDirection()
  const NavItems = [
    { pathname: '/about', menuName: 'Sobre Mim' },
    { pathname: '/portfolio', menuName: 'Portfólio' }
  ]

  return (
  <header className={`sticky  ${isHidden ? 'top-[-6rem]' : `top-0 ${isReachedTop ? '' : 'shadow-lg'}`} z-10 flex justify-between items-center mb-10 h-24 px-10 md:px-24 backdrop-blur-xl transition-all duration-500 ease-in-out`}>
    <Link rel="noopener" tabIndex={0} href="/">
      <Image priority alt="logo" src={Logo} width={80} height={64} className="w-20 h-16" />
    </Link>
    <div className="flex gap-5">
    {NavItems?.map(item => (
        <Link
          rel="noopener"
          key={item.pathname}
          tabIndex={0}
          href={item.pathname}
          className="text-gray-700 dark:text-white font-semibold cursor-pointer hover:text-primary-light dark:hover:text-primary-light">
            {item.menuName}
          </Link>
      ))}
      <ThemeSwitcher />
    </div>
  </header>
  )
}