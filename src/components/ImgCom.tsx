interface Iprops{
    imgUrl: string,
    alt: string,
    className:string,
}

const ImgCom = ({imgUrl,alt,className}:Iprops) => {
  return (
    <img src={imgUrl} alt={alt} className={className} />
  )
}

export default ImgCom