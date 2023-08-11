import React from 'react'

type proptype={
text:string;
  price:number;
}

const PriceTag = ({text,price}:proptype) => {
  
  return (
    <div className='w-56 mx-auto h-14 bg-[#4B4B4B]/80 rounded-3xl component-shadow flex items-center justify-between hover:scale-105 duration-100 cursor-pointer'>
   <div className='w-[40%]  h-full bg-black rounded-3xl text-white flex items-center justify-center realtive'>
    <h3 className=''>${price}</h3>
   </div>


    <h2 className='mx-auto  text-[#dedede] font-medium text-md px-1'>{text}</h2>
    </div>
  )
}

export default PriceTag