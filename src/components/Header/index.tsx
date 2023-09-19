"use client"
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic"
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Logo from "../../assets/logo.png"

const ThemeSwitcher = dynamic(() => import("../ThemeSwitcher"))

export default function Header() {
  const { isHidden, isReachedTop } = useScrollDirection()
  const NavItems = [
    { pathname: '/about', menuName: 'Sobre Mim', dataCy: "about" },
    { pathname: '/portfolio', menuName: 'Portfólio', dataCy: "portfolio" }
  ]

  return (
  <header className={`sticky  ${isHidden ? 'top-[-6rem]' : `top-0 ${isReachedTop ? '' : 'shadow-lg'}`} z-10 flex justify-between items-center mb-10 h-24 px-10 md:px-24 backdrop-blur-xl transition-all duration-500 ease-in-out`}>
    <Link data-cy="logo" rel="noopener" tabIndex={0} href="/">
      <Image alt="logo" src={Logo} width={45} height={56} />
    </Link>
    <div className="flex gap-5">
    {NavItems?.map(item => (
      <Link
        rel="noopener"
        data-cy={item.dataCy}
        key={item.pathname}
        tabIndex={0}
        href={item.pathname}
        className="dark:text-white font-semibold cursor-pointer hover:text-primary-light dark:hover:text-primary-light">
          {item.menuName}
        </Link>
      ))}
      <ThemeSwitcher />
    </div>
  </header>
  )
}