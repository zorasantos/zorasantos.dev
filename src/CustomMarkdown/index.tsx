type IProps = {
  children: string;
  props: string;
}

export const CustomCode = ({ children, ...props }: IProps) => {
  return (
    <span {...props}>{children}</span>
  )
}
