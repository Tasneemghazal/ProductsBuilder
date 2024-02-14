import ImgCom from "./ImgCom";
import { Button } from "./UI/Button";

interface Iprops {}

export const ProductCard = ({}: Iprops) => {
  return (
    <div className="border rounded-md p-2 flex flex-col">
      <ImgCom imgUrl="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
       alt={"product image"}
       className="rounded-md mb-2"/>
      <h3>2020 modern cars</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, molestiae minima</p>
      <div className="flex my-2 space-x-1">
      <span className="w-5 h-5 bg-indigo-500 rounded-full cursor-pointer"/>
      <span className="w-5 h-5 bg-yellow-500 rounded-full cursor-pointer"/>
      <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"/>
      </div>
      <div className="flex items-center justify-between">
        <span>$500000</span>
        <ImgCom imgUrl="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
       alt={"product image"}
       className="rounded-full w-10 h-10 object-cover"/>
      
      </div>
      <div className="flex items-center justify-between space-x-1  mt-5">
        <Button className="bg-indigo-600 ">Edit</Button>
        <Button className="bg-red-600 ">Remove</Button>
      </div>
    </div>
    
  );
};
