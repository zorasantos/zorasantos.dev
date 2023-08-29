"use client"
import Image from "next/image";
import { useTheme } from "next-themes";
import DarkModeIcon from "@/assets/dark_mode.svg"
import LightModeIcon from "@/assets/light_mode.svg"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const icon =  theme === "dark" ? LightModeIcon : DarkModeIcon

  function HandleSwitcherTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  function handleKeyUp(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      HandleSwitcherTheme();
    }
  }

  return (
    <Image tabIndex={0} className=" bg-slate-500 dark:bg-white rounded-full cursor-pointer"
     onClick={HandleSwitcherTheme} onKeyUp={handleKeyUp} src={icon}
     alt={`${theme} mode icon`} />
  )
}