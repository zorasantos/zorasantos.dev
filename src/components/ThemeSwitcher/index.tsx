"use client"
import Image from "next/image";
import { useTheme } from "next-themes";
import DarkModeIcon from "@/assets/dark_mode.svg"
import LightModeIcon from "@/assets/light_mode.svg"
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme  } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(!mounted)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!mounted) {
    return (
      <div className="animate-pulse">
        <div className="rounded-full shadow bg-gray-200 h-6 w-6"></div>
      </div>
    )
  }

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