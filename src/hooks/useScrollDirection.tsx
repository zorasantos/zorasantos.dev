import { ScrollDirectionContext } from "@/context/ScrollDirection";
import { useContext } from "react";

export function useScrollDirection() {
  const value = useContext(ScrollDirectionContext)
  return value
}