"use client";
import React from "react";
import Envio from "./Envio";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const BagProductCard = () => {
  const handleCounter = (product, accionToDo) => {
    dispatch({ accion: "COUNTER", products: product, plusOrMinus: accionToDo });
  };

  const { state, dispatch } = useContext(DataContext);
  return (
    <div className="flex flex-col gap-6  ">
      <div className="flex flex-col">
        <h2 className="font-outfit text-lg font-semibold">Productos</h2>
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
                  <p>{item.quantity}</p>
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
        <div className="h-[1px] bg-[#E3DED7] "></div>
      </div>

      <div className=" flex flex-col gap-6">
        <h3 className="font-outfit text-lg font-semibold">Seleccionar envío</h3>

        <Envio />
      </div>
    </div>
  );
};

export default BagProductCard;
