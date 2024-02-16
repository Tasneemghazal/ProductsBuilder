import ImgCom from "./ImgCom";
import { Button } from "./UI/Button";
import { IProduct } from "./interfaces/interfaces";
import { textSclicer } from "./utilities/functions";

interface Iprops {
  product:IProduct
}

export const ProductCard = ({product}: Iprops) => {
  
  
  return (
    <div className="max-w-sm md:max-w-lg mx:auto md:mx-0 border rounded-md p-2 flex flex-col">
      <ImgCom imgUrl={product.imageURL}
       alt={"product image"}
       className="rounded-md mb-2"/>
      <h3>{product.title}</h3>
      <p>{textSclicer(product.description)}</p>
      <div className="flex my-2 space-x-1">
      <span className="w-5 h-5 bg-indigo-500 rounded-full cursor-pointer"/>
      <span className="w-5 h-5 bg-yellow-500 rounded-full cursor-pointer"/>
      <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"/>
      </div>
      <div className="flex items-center justify-between">
        <span>{product.price}</span>
        <ImgCom imgUrl={product.imageURL}
       alt={"product image"}
       className="rounded-full w-10 h-10 object-fit"/>
      
      </div>
      <div className="flex items-center justify-between space-x-1  mt-5">
        <Button className="bg-indigo-600 ">Edit</Button>
        <Button className="bg-red-600 ">Remove</Button>
      </div>
    </div>
    
  );
};
