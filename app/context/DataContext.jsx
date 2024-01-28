"use client";

import React, { createContext, useEffect, useState, useReducer } from "react";
import cartReducer from "../../utils/cartReducer";

// 1.Crear contexto
export const DataContext = createContext(null);

// 2.Crear Provider
const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [state, dispatch] = useReducer(cartReducer, []);

  const totalCuantity = state.reduce((acc, currenProduct) => {
    return acc + currenProduct.quantity
   }, 0);

  const totalPrice = state.reduce((acc, currenProduct)=>{
    return acc + currenProduct.quantity * currenProduct.price
  },0)

 
  useEffect(() => {
    fetch("https://cafe-de-altura.vercel.app/api/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, state, dispatch, totalCuantity, totalPrice }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
