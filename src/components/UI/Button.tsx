import { ReactNode } from "react"

interface Iprops{
children:ReactNode,
className:string,
}

export const Button = ({children,className,...rest}:Iprops) => {
  return (
    <button className={`${className}  text-white w-full rounded-md p-1`} {...rest}>{children}</button>
  )
}
