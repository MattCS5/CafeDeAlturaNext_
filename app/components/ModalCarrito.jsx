"use client";

import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";


const ShoppingCart = () => {
  
  
  
  const handleRemoveAllToCart = (product) => {
    dispatch({ accion: "REMOVE_ALL", products: product });
    console.log(product);
  };
  
  const handleRemoveToCart = (product) => {
    dispatch({ accion: "REMOVE_ITEM", products: product });
    console.log(product);
  };


  
  const { state, dispatch } = useContext(DataContext);



  if (state.length === 0) {
    return (
      <div className="fixed top-16 right-0 p-5 bg-black text-white rounded-b-xl font-outfit">
        <h2>El carrito está vacío...</h2>
      </div>
    );
  }

  return (
    <div className=" flex  flex-col fixed top-16 right-0 p-5  bg-black  text-white rounded-b-xl font-outfit z-10 ">
      <h2>Shopping Cart</h2>
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


      <div className="flex flex-col pt-3">
        <Link
          href="/bagShopPage"
          className="flex gap-2 py-3 px-6 rounded bg-[#515051]"
        >
          Ir a la Cesta
        </Link>
      </div>

    </div>
  );
};

export default ShoppingCart;
