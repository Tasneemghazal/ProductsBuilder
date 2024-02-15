import { InputHTMLAttributes } from "react"

interface Iprops extends InputHTMLAttributes<HTMLInputElement>{

}

const Input = ({...rest}:Iprops) => {
  return (
    
    <input  className="border-2 border-gray-300 shadow-md text-md rounded-md focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500 px-3 py-3" {...rest}/>
  )
}

export default Input