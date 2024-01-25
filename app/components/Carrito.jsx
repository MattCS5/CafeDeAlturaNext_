"use client";
import React from "react";

import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";


const Carrito = () => {
  
  
  
  const handleRemoveAllToCart = (product) => {
    dispatch({ accion: "REMOVE_ALL", products: product });
    console.log(product);
  };
  
  const handleRemoveToCart = (product) => {
    dispatch({ accion: "REMOVE_ITEM", products: product });
    console.log(product);
  };


  
  const { state, dispatch } = useContext(DataContext);



 

  return (
    <div className=" flex  flex-col  right-0 p-5  bg-black  text-white rounded-b-xl font-outfit  ">
    <h2>Shopping Cart1265265225</h2>
    {state.map((item) => (
      <div
        className="flex p-2 gap-2  "
        style={{ width: "18rem" }}
        key={item.id}
      >
        <div className="flex p-2 gap-2 items-center justify-between ">

          <div className=" flex flex-col gap-1 ">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Price: {item.price.toFixed(2)}€</p>
          </div>

          <div className=" flex gap-2 ">
            <Image src={item.img} alt="cafe" width={80} height={80} />
          <button
            className="text-red-400 font-outfit"
            type="button"
            onClick={() => handleRemoveToCart(state)}
          >
            Eliminar
          </button>
          </div>  
        </div>

      </div>
    ))}

          <button
            className="text-red-400 font-outfit"
            type="button"
            onClick={() => handleRemoveAllToCart(state)}
          >
            Eliminar
          </button>


    

  </div>
  );
};

export default Carrito;
