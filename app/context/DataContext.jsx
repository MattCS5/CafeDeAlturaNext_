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
  console.log(totalCuantity);
 
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
    <DataContext.Provider value={{ data, state, dispatch, totalCuantity }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
