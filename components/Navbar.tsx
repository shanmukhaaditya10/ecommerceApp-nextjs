"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { SearchBar } from ".";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "@/context/ShoppingCartContext";

const Navbar = () => {
  const {cartQuantity} = useShoppingCart();
  return (
    <>
    <div className="flex  items-center w-full h-[70px] bg-[#0a0a0a] px-2">
      <div className="flex flex-row items-center w-full justify-evenly gap-3 ">
        <Link href='/' className=""> 
          <Image src="/logo.png" alt="logo" width={60} height={40} className="" />
        </Link>
        <div className="hidden md:flex flex-row items-center gap-4 text-white ">
          <Link href="/" className="link-hover">
            <p>Home</p>
          </Link>
          <Link href="/" className="link-hover">
            <p>Men</p>
          </Link>
          <Link href="/" className="link-hover">
            <p>Women</p>
          </Link>
          <Link href="/" className="link-hover">
            <p>Footwear</p>
          </Link>
        </div>
          
        <div className="w-[50%] md:w-[20%]">
            <SearchBar />
        </div>
        <div className="relative">
      <div className="absolute -top-2 -right-2 rounded-full bg-green-700 w-6 h-6 flex justify-center items-center">
        <p className="text-white text-sm">{cartQuantity}</p>
      </div>
      <Link href='/cart' >
     <FaShoppingCart color={`white`} size={30} className='cursor-pointer '/> 
      </Link>
        </div>

       
      </div>
    </div>
      <div className="md:hidden w-full h-8 bg-gray-800">
            <div className="flex flex-row items-center gap-4 text-white justify-center">
          <Link href="/" className="link-hover">
            <p>Home</p>
          </Link>
          <Link href="/" className="link-hover">
            <p>Men</p>
          </Link>
          <Link href="/" className="link-hover">
            <p>Women</p>
          </Link>
          <Link href="/" className="link-hover">
            <p>Footwear</p>
          </Link>

            </div>
          </div>
    </>

  );
};

export default Navbar;
