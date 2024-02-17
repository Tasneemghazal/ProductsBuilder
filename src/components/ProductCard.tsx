import CircleColor from "./CircleColor";
import ImgCom from "./ImgCom";
import { Button } from "./UI/Button";
import { IProduct } from "./interfaces/interfaces";
import { textSclicer } from "./utilities/functions";

interface Iprops {
  product:IProduct;
  setProductToEdit:(product:IProduct) => void;
  openEditModal:() => void;
  index:number;
  setProductToEditIndex:(value:number) => void;
  openConfirmModal: () => void;
}

export const ProductCard = ({product, setProductToEdit, openEditModal, setProductToEditIndex,index,openConfirmModal}: Iprops) => {
  const renderColorList = product.colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
    />
  ));
  
  const editProduct=()=>{
    setProductToEdit(product);
    openEditModal();
    setProductToEditIndex(index);
  }
  const onRemove=()=>{
    setProductToEdit(product);
    openConfirmModal();
  }
  
  return (
    <div className="max-w-sm md:max-w-lg mx:auto md:mx-0 border rounded-md p-2 flex flex-col">
      <ImgCom imgUrl={product.imageURL}
       alt={"product image"}
       className="rounded-md mb-2 w-full h-full"/>
      <h3>{product.title}</h3>
      <p>{textSclicer(product.description)}</p>
      <div className="flex my-2 space-x-2">{renderColorList}</div>
     
      <div className="flex items-center justify-between">
        <span>{product.price}</span>
        <ImgCom imgUrl={product.imageURL}
       alt={"product image"}
       className="rounded-full w-10 h-10 object-fit"/>
      
      </div>
      <div className="flex items-center justify-between space-x-1  mt-5">
        <Button className="bg-indigo-600 " onClick={editProduct}>Edit</Button>
        <Button className="bg-red-600 " onClick={onRemove}>Remove</Button>
      </div>
    </div>
    
  );
};
