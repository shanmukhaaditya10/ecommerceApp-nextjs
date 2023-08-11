'use client'
import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

const LikeBtn = () => {
  const [color, setcolor] = useState('white')
  const changeColor = () => {
    color === 'white' ? setcolor('red') : setcolor('white')
    
  }
  return (
    <div className='w-14 h-14 rounded-full bg-black flex justify-center items-center cursor-pointer component-shadow hover:scale-105 duration-100' onClick={changeColor}>
     <FaHeart color={`${color}`} size={30} /> 
    </div>
  )
}

export default LikeBtn