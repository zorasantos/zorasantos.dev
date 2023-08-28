"use client"

import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  return <NextThemeProvider defaultTheme="light">{children}</NextThemeProvider>
}