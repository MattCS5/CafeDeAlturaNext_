"use client";
import React from "react";

import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Image from "next/image";


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
    <div className=" flex  flex-col   p-5   font-outfit  ">

      <h1 className="flex justify-center items-center  font-outfit text-2xl font-medium text-[#2A5B45]">
        Cesta ({state.length})
      </h1>

      <h2 className="font-outfit text-lg font-semibold">Productos</h2>

      {state.map((item) => (

        <div
          className="flex p-2 gap-20  "
          style={{ width: "18rem" }}
          key={item.id}
        >
          <div className="flex p-2 gap-10 items-center justify-between ">
            
            <div className=" flex gap-2 ">
              <button
                className="text-red-400 font-outfit"
                type="button"
                onClick={() => handleRemoveToCart(item)}
              >
                -
              </button>

              <div className=""><p>1</p></div>

              <button
                className="text-red-400 font-outfit"
                type="button"
                onClick={() => handleRemoveToCart(item)}
              >
                +
              </button>
              <Image src={item.img} alt="cafe" width={80} height={80} />
            </div>
          </div>
          <div className=" flex flex-col gap-1 ">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Price: {item.price.toFixed(2)}€</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carrito;
