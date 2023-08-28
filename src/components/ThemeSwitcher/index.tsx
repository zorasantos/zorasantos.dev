"use client"
import Image from "next/image";
import { useTheme } from "next-themes";
import DarkModeIcon from "@/assets/dark_mode.svg"
import LightModeIcon from "@/assets/light_mode.svg"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const icon =  theme === "dark" ? LightModeIcon : DarkModeIcon

  return (
    <Image className=" bg-slate-500 dark:bg-white rounded-full cursor-pointer"
     onClick={() => setTheme(theme === "dark" ? "light" : "dark")} src={icon}
     alt={`${theme} mode icon`} />
  )
}