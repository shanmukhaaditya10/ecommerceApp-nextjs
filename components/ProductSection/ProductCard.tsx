import { ProductDetails } from "@/types";
import Image from "next/image";
import React from "react";
import { AddToCartBtn, LikeBtn, PriceTag } from "..";
import { FaTrash } from "react-icons/fa";
import { useShoppingCart } from "@/context/ShoppingCartContext";

const ProductCard = (props: ProductDetails) => {
  const {  getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    remvoveItem} = useShoppingCart();
  const quantity = getItemQuantity(props.id);
  return (


    <div className="relative mb-6 ">
      <div className="card bg-[#c4c4c4] w-72 h-96 py-4 px-2 relative ">
        <div className="h-40 relative">
          <Image
            src={props.images[0] }
            layout="fill"
            style={{ objectFit: "contain" }}
            alt={props.title}
          /> 
        </div>
        <p className="text-gray-600 mx-auto">{props.category }</p>

        <h2 className="text-xl font-mono my-2 mx-auto">{props.title }</h2>
        <div className="flex items-center absolute bottom-2 left-2 p-2">
          <span className="text-yellow-500 mr-1">&#9733;</span>
          <span className="">{props.rating }</span>
        </div>
        <div className="my-4">
          <PriceTag price={props.price  } text="Details" />
        </div>
      </div>
      {quantity !=0 ?
      <div
      className="bg-white h-10 w-[80%] absolute bottom-4 
    translate-x-[15%] z-50 flex items-center justify-between rounded-xl p-4 component-shadow"
    >
      <button className="flex items-center justify-center mx-1 my-2 w-6 h-6 text-xl cursor-pointer rounded-full bg-black text-white" onClick={()=>decreaseQuantity(props.id)}>
        -
      </button>
      {quantity }
      <button className="flex items-center justify-center mx-1 my-2 w-6 h-6 text-xl text-center cursor-pointer rounded-full bg-black text-white" onClick={()=>increaseQuantity(props.id)}>
        +
      </button>
      <div onClick={()=>remvoveItem(props.id)}>
        <FaTrash color={'red'} size={20} className="cursor-pointer" />
      </div>

    </div> :""
      }
      <div className="flex space-x-2 absolute -bottom-7 right-2">
        <LikeBtn />
        <AddToCartBtn increaseQuantity={increaseQuantity}
         quantity={quantity} id={props.id}
        />
      </div>
    </div>

  );
};

export default ProductCard;
