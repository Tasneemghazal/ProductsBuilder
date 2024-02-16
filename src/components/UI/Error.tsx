interface Iprops{
msg:string;
}

const Error = ({msg}:Iprops) => {
  return (
    msg&&<span className="block text-red-600 text-sm">{msg}</span>
  )
}

export default Error;