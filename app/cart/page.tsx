"use client";

import { useData } from "@/context/DataProvider";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

const Page = () => {
  const { cartItem, cartQuantity } = useShoppingCart();
  const {allItems} =  useData()
  const filteredCartItems = allItems.filter((item) => {
    return cartItem.some((cartItem) => cartItem.id === item.id);
  });
  
  const totalItemsInCart = cartItem.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = filteredCartItems.reduce(
    (total, item) => total + item.price * cartQuantity,
    0
  );

  return (
    <div className="md:mx-20 ">
      <h1 className="text-4xl font-bold text-gray-600 py-4">Shopping Bag</h1>
      <div className="flex outline-3 flex-col sm:flex-row ">
      <div className="md:w-[60%] w-full">
        
        {filteredCartItems.map((item) => (
          <div className="h-60  bg-gray-100 my-2 flex  items-center mx-4 ">
            <div className="relative w-36 h-36 ml-4">
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="mx-4">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                {item.title }
              </h2>
              <h3 className="text-gray-600 font-mono">{item.description}</h3>
              <h4 className="text-gray-600 font-thin text-sm mt-2">
                {item.category }
              </h4>
              <h2 className="text-xl font-bold text-gray-700 mt-4">
                ${item.price } x {cartQuantity} = ${item.price * cartQuantity}
               
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className=" shadow-sm flex-1 shadow-black h-96">
        <h3 className="text-2xl font-bold text-gray-600 p-4">Totals</h3>
        <div className="p-4 m-2 h-32 outline-dashed">
          <h4 className=" font-semibold text-lg">
         Total items  = {totalItemsInCart}
          </h4>
        
          <h4 className=" font-semibold text-xl ">
         Total Price  = <span className="underline">${totalPrice}</span>
          </h4>
        
        </div>
      </div>
      </div>
    </div>
  );
};

export default Page;
