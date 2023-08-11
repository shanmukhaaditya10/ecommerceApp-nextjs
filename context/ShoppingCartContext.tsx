"use client";

import { ProductDetails } from "@/types";
import React, { createContext, useContext, useState } from "react";
type ShoppingCartProps = { children: React.ReactNode };

type ShoppingCartContext = {
  cartQuantity: number;
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  remvoveItem: (id: number) => void;
  cartItem: CartItem[];

};
type CartItem = {
  id: number;
  quantity: number;
};
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProps) {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
 
  
 
  const getItemQuantity = (id: number) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseQuantity = (id: number) => {
    setCartItem((currItems) => {
      const itemToUpdate = currItems.find((item) => item.id === id);

      if (itemToUpdate == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const cartQuantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function decreaseQuantity(id: number) {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  const remvoveItem = (id: number) => {
    setCartItem((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        remvoveItem,
        cartQuantity,
        cartItem,
   
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
