import { ProductCard } from "./components/ProductCard.tsx";
import MyDialog from "./components/UI/MyDialog.tsx";
import { productList } from "./components/data/data.ts";

const App = () => {
  const renderProductList = productList.map((product)=><ProductCard key={product.id} product={product}/>)
  return (
    <div className="container m-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-5 gap-2 p-2">
        {renderProductList}
      </div>
      <MyDialog/>
    </div>
  );
};

export default App;
