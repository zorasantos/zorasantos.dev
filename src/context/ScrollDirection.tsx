"use client"
import { ReactNode, createContext, useEffect, useState } from "react"

type ProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  isHidden: boolean;
  isReachedTop?: boolean;
}

export const ScrollDirectionContext = createContext({} as ContextProps)

export const ScrollDirectionProvider = ({ children }: ProviderProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [isReachedTop, setIsReachedTop] = useState<boolean>(true);

  useEffect(() => {
    let lastScrollY = window.scrollY
    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const goingDown = scrollY > lastScrollY
      const diff = 4

      const stateNotMatched = goingDown !== isHidden
      const scrollDownTooFast = scrollY - lastScrollY > diff
      const scrollUpTooFast = scrollY - lastScrollY <- diff

      const shouldToggleHeader = stateNotMatched && (scrollDownTooFast || scrollUpTooFast)
      if (shouldToggleHeader) {
        setIsHidden(goingDown)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    };

    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setIsReachedTop(true)
      } else {
        setIsReachedTop(false)

      }
    })
    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [isHidden])

  return (
    <ScrollDirectionContext.Provider value={{ isHidden, isReachedTop }}>
      {children}
    </ScrollDirectionContext.Provider>
  )
}

