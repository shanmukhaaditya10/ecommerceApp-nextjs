"use client"
import { useData } from "@/context/DataProvider";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Image from "next/image";
import React, {  useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const {allItems} = useData()
  const [query, setQuery] = useState("")
  useEffect(()=>{
    
  })
  const data = allItems.filter(item=>item.title.toLowerCase().includes(query.toLowerCase())||item.category.toLowerCase().includes(query.toLowerCase()))
  
  return (
    <div className="relative">
      <form
        
        className="relative rounded-md  bg-[#454545]  focus-within:background-color h-8 flex flex-row justify-between px-4"
      >
          <input
            type="text"
            placeholder="Search"
            className=" bg-transparent focus:outline-none text-white  focus:text-black  h-full"
            onChange={(e) => setQuery(e.target.value)}
          />
        <div>
          <div className="h-full flex items-center absolute right-2">
            <FaSearch className="text-gray-500 " />
          </div>
        </div>
      </form>
      {
        query.length > 0 &&
      <div className="absolute w-full h-48 overflow-y-auto z-50 overflow-x-hidden mt-1 ">
       { 
        data.length === 0 ?  <div className="w-full h-10 bg-gray-200  text-black cursor-pointer flex justify-between items-center border-b-2 border-black hover:scale-105 px-4 truncate ">
        <p>No results found</p>
      </div>:
       data.map((item)=>( 
      <div className=" -bottom-10 flex-1 h-10 bg-gray-200  text-black cursor-pointer flex justify-between items-center border-b-2 border-black hover:scale-105 px-4 py-2 space-x-3 text-ellipsis truncate  overflow-x-hidden">
        <Image src={item.images[0]} width={30} height={30} alt={item.title} />
       <p>{item.title}</p> 
       </div>
        ))}</div>
       }
      
      
    </div>

  );
};

export default SearchBar;
