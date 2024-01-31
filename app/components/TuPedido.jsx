"use client";

import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const TuPedido = () => {
  const { state, totalPrice, deliveryPrice } = useContext(DataContext);

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className=" p-6 gap-6 rounded bg-[#F7F5F3] h-min font-outfit w-[1200px] ">
        <p className="text-lg font-semibold">Tu pedido</p>
        {state.map((item) => (
          <div
            className="flex p-2 gap-6  font-outfit justify-between "
            key={item.id}
          >
            <div className="flex p-2 items-center font-outfit ">
              <div className=" flex gap-2 "></div>
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

        <div>
          <div className="h-[1px] bg-[#E3DED7]"></div>

          <div>
            <div className="flex justify-between pt-4 ">
              <p>SUBTOTAL</p>
              <p>
                <b>{totalPrice.toFixed(2)}€</b>
              </p>
            </div>

            <div className="flex justify-between pt-4 pb-4">
              <p>ENVÍO</p>
              <p>
                <b>{deliveryPrice === "Express" ? "9,00 €" : "GRATIS"}</b>
              </p>
            </div>
            <div className="h-[1px] bg-[#E3DED7]"></div>

            <div className="flex justify-between pt-4">
              <p>
                <b>TOTAL</b>
              </p>
              <p>
                <b>
                  {(totalPrice + (deliveryPrice === "Express" ? 9 : 0)).toFixed(
                    2
                  )}
                  €
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
            <Link className="pt-6" href="/shopPage">
              <Button intent={"secondary"} size={"medium"}>
                Volver a la tienda
              </Button>
            </Link>
    </div>
  );
};

export default TuPedido;
