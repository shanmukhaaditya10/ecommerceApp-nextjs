'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { ProductCard } from '..'


import { useData } from '@/context/DataProvider'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


const ProductSection = () => {
  const {fetchData,allItems} = useData()
  
  useEffect(()=>{
fetchData()
  console.log('allitems',allItems);
  
  },[])
   
    


  return (
    <div className=' flex gap-5 flex-wrap px-4
    py-9 justify-center flex-1'> 
    {allItems.length > 0 ? (
      allItems.map((item) => (
        <ProductCard
          id={item.id}
          category={item.category}
          description={item.description}
          images={item.images}
          price={item.price}
          rating={item.rating}
          title={item.title}
          key={item.id}
        />
      ))
    ) :   
    <SkeletonTheme baseColor="#E2E2E2" highlightColor="#828181">
    <div className='flex flex-wrap justify-center gap-5

    
    '>
    {[...Array(8)].map((_, index) => (
      <Skeleton
        key={index}
        width='18rem'
        height='22rem'
        style={{ marginBottom: '10px' }}
      />
    ))}
  </div></SkeletonTheme>
  }
  

    </div>
  )
}

export default ProductSection
