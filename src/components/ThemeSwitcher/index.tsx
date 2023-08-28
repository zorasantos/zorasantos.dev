"use client"
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  return <button className="text-slate-900 dark:text-white" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Change Theme</button>
}