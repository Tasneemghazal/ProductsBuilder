import { ChangeEvent, FormEvent, useState } from "react";
import { ProductCard } from "./components/ProductCard.tsx";
import MyDialog from "./components/UI/MyDialog.tsx";
import { categories, colors, formInputsList, productList } from "./components/data/data.ts";
import { Button } from "./components/UI/Button.tsx";
import Input from "./components/UI/Input.tsx";
import { IProduct } from "./components/interfaces/interfaces.ts";
import { productSchema } from "./validation/index.ts";
import Error from "./components/UI/Error.tsx";
import CircleColor from "./components/CircleColor.tsx";
import { v4 as uuidv4 } from 'uuid';
import Select from "./components/UI/Select.tsx";
const App = () => {
  const defaultProductObject = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
  const [products,setProducts]=useState<IProduct[]>(productList);
  const [productToEdit,setProductToEdit] = useState<IProduct>(defaultProductObject);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [selected,setSelected] = useState(categories[0]);

  const [Errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeEditModal() {
    setIsOpenModal(false);
  }

  function openEditModal() {
    setIsOpenModal(true);
  }
  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    const newValue = event.target.value;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [inputName]: newValue,
    }));
    setErrors({
      ...Errors,
      [inputName]: "",
    });
  };

  function submitHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const errors = productSchema({
      title: product.title,
      description: product.description,
      imageURL: product.imageURL,
      price: product.price,
    });

    const hasErrorMessage =
      Object.values(errors).some((value) => value == "") &&
      Object.values(errors).every((value) => value == "");
    if (!hasErrorMessage) {
      setErrors(errors);
      return;
    }
    console.log({...product,id:uuidv4(),colors:tempColor})
    setProducts((prev)=>[...prev,{...product,id:uuidv4(),colors:tempColor, category:selected}]);
    setProduct(defaultProductObject);
    setTempColor([]);
    closeModal();
   
  }
  function onCancel(): void {
    setProduct(defaultProductObject);
    closeModal();
  }

  const renderProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} setProductToEdit={setProductToEdit} openEditModal={openEditModal}/>
  ));
  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col " key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-900"
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={(event) => onChangeHandler(event, input.name)}
      />
      <Error msg={Errors[input.name]} />
    </div>
  ));
  const renderColorList = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if(tempColor.includes(color)) {
          setTempColor(prev=>prev.filter(item=>item !== color))
          return;}
        setTempColor((prev) => [...prev, color])
      }}
    />
  ));
  // the above syntax inside serTempColor to get the prev value of the state

  return (
    <div className="container flex flex-col justify-center items-center">
      <div className="w-2/4 flex justify-center mt-3 ">
        <Button className="bg-indigo-600 " onClick={openModal}>
          Build Product
        </Button>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-5 gap-2 md:gap-4 p-2">
        {renderProductList}
      </div>
      <MyDialog
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Product"}
      >
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex my-2 space-x-2">{tempColor.map(color=>(
            <span key={color} style={{backgroundColor:color}} className="p-1 mr-1 rounded-md text-white">{color}</span>
          )
          )}</div>
          <Select selected={selected} setSelected={setSelected}/>
          <div className="flex my-2 space-x-2">{renderColorList}</div>
        
          <div className="flex items-center space-x-2">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Submit
            </Button>
            <Button
              className="bg-gray-300 hover:bg-gray-500"
              onClick={onCancel}
            >
              Close
            </Button>
          </div>
        </form>
      </MyDialog>
      {/**edit modal */}
      <MyDialog
        isOpen={isOpenModal}
        closeModal={closeEditModal}
        title={"Edit Product"}
      >
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex my-2 space-x-2">{tempColor.map(color=>(
            <span key={color} style={{backgroundColor:color}} className="p-1 mr-1 rounded-md text-white">{color}</span>
          )
          )}</div>
          <Select selected={selected} setSelected={setSelected}/>
          <div className="flex my-2 space-x-2">{renderColorList}</div>
        
          <div className="flex items-center space-x-2">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Submit
            </Button>
            <Button
              className="bg-gray-300 hover:bg-gray-500"
              onClick={onCancel}
            >
              Close
            </Button>
          </div>
        </form>
      </MyDialog>
    </div>
  );
};

export default App;
