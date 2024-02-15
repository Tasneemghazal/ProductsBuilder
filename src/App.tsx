import { useState } from "react";
import { ProductCard } from "./components/ProductCard.tsx";
import MyDialog from "./components/UI/MyDialog.tsx";
import { formInputsList, productList } from "./components/data/data.ts";
import { Button } from "./components/UI/Button.tsx";
import Input from "./components/UI/Input.tsx";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col ">
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-900"
      >
        {input.label}
      </label>
      <Input type={input.type} id={input.id} name={input.name} />
    </div>
  ));
  return (
    <div className="container">
      <Button className="bg-indigo-600 " onClick={openModal}>
        Add
      </Button>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-5 gap-2 md:gap-4 p-2">
        {renderProductList}
      </div>
      <MyDialog
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Product"}
      >
        <form className="space-y-3">
          {renderFormInputList}
          <div className="flex items-center space-x-2">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Submit
            </Button>
            <Button className="bg-gray-300 hover:bg-gray-500">Close</Button>
          </div>
        </form>
      </MyDialog>
    </div>
  );
};

export default App;
