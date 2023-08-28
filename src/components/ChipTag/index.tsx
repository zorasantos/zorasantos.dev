import { HTMLAttributes } from "react";

type IChipTagProps = HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode
}

export default function ChipTag({ children, ...props }: IChipTagProps) {
  return (
    <span {...props} className="inline-block bg-gray-200 dark:bg-[#2D3748] rounded-full px-2 py-1 text-sm text-gray-600 dark:text-white hover:text-primary-light dark:hover:text-primary-light mr-2 mb-2">{children}</span>
  )
}