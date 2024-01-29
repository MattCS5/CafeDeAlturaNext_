"use client";

import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

const ShoppingCart = () => {
  const handleRemoveAllToCart = (product) => {
    dispatch({ accion: "REMOVE_ALL", products: product });
  };

  const handleCounter = (product, accionToDo) => {
    dispatch({ accion: "COUNTER", products: product, plusOrMinus: accionToDo });
  };

  const { state, dispatch, setOpen } = useContext(DataContext);

  if (state.length === 0) {
    return (
      <div className="fixed top-16 right-0 p-5 bg-black text-white rounded-b-xl font-outfit">
        <h2>El carrito está vacío...</h2>
      </div>
    );
  }

  return (
    <div className=" flex  flex-col fixed top-16 right-0 p-5 bg-opacity-90 bg-[#f7f5f3]  text-black rounded-b-xl font-outfit z-10 ">
      <h2 className="text-lg font-semibold text-[#2a5b45]">Cesta: </h2>
      {state.map((item) => (
        <div
          className="flex p-2 gap-6  font-outfit justify-between "
          key={item.id}
        >
          <div className="flex p-2 items-center font-outfit ">
            <div className=" flex gap-2 ">
              <button
                className="text-black font-outfit"
                type="button"
                onClick={() => handleCounter(item, "DECREMENT")}
              >
                <Minus />
              </button>

              <div className="bg-[#F7F5F3] rounded-full w-6 h-6 justify-center text-center">
                <p className=" text-black">{item.quantity}</p>
              </div>

              <button
                className="text-black font-outfit"
                type="button"
                onClick={() => handleCounter(item, "INCREMENT")}
              >
                <Plus />
              </button>
            </div>
            <div className=" flex gap-6 font-outfit ">
              <Image src={item.img} alt="cafe" width={80} height={80} />

              <div className="font-outfit text-sm ">
                <h5 className=" font-semibold  ">{item.name}</h5>
                <p>Paquete de café, 250gr</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-outfit text-lg font-semibold">
              {(item.price * item.quantity).toFixed(2)}€
            </p>
          </div>
        </div>
      ))}

      <div className="flex pt-3  justify-between items-center gap-2">
          <Link
            onClick={() => setOpen(false)}
            href="/bagShopPage"
            className="flex  gap-2 py-3 px-6 w-36 rounded text-white  bg-[#2a5b45]"
          >
            Ir a la Cesta
          </Link>

          <button
            className="text-[#2a5b45] font-outfit "
            type="button"
            onClick={() => handleRemoveAllToCart(state)}
          >
            <b><Trash2/> </b>
          </button>

      </div>
    </div>
  );
};

export default ShoppingCart;
