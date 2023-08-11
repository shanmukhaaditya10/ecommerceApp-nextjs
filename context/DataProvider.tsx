"use client"


import { ProductDetails } from "@/types";
import { createContext,  useContext, useState } from "react";
type DataFetchingContext = {
    fetchData: () => void;
    allItems: ProductDetails[];
  };

  const DataFetchingContext = createContext({} as DataFetchingContext);
  export function useData() {
    return useContext(DataFetchingContext);
  }
const DataProvider = ({ children }: {children: React.ReactNode}) => {
    const [allItems, setAllItems] = useState<ProductDetails[]>([]);
 async function  wait(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));

  
}
  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products`)
    const data = await res.json()
   
      console.log(data);
      await wait(5000)
      setAllItems(data.products);
      return data
   
  }

  return (
    <DataFetchingContext.Provider
      value={{
        fetchData,
        allItems,
      }}
    >
      {children}
    </DataFetchingContext.Provider>
  )
}

export default DataProvider