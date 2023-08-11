"use client";
import { useState } from "react";
import { FaCheck, FaShoppingCart } from "react-icons/fa";

const AddToCartBtn = ({
  increaseQuantity,
  quantity,
  id,
}: {
  increaseQuantity: Function;
  quantity: number;
  id: number;
}) => {
  const [color, setcolor] = useState("white");

  return (
    <div
      className={`w-14 h-14 rounded-full hover:scale-105 duration-100 flex justify-center items-center cursor-pointer component-shadow  relative bg-[#454545]`}
      onClick={() => {if (quantity === 0) {
        increaseQuantity(id);
      }}}
    >
      {quantity > 0 && (
        <FaCheck
          color={`white`}
          size={17}
          className="absolute top-2 right-2 rounded-full bg-green-700 p-1"
        />
      )}

      <FaShoppingCart color={"white"} size={30} />
    </div>
  );
};

export default AddToCartBtn;
