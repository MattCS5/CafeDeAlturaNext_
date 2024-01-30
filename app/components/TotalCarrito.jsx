"use client";
import React from "react";
import Button from "./Button";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Link from "next/link";

const TotalCarrito = ({checkout}) => {
  console.log("checkout:", checkout);
  const { totalPrice } = useContext(DataContext);
  const {deliveryPrice } = useContext(DataContext);
  

  return (
    <div className="flex flex-col rounded bg-[#F7F5F3] h-min w-[384px]">
      <div className=" flex flex-col gap-4 p-6 ">
        <h3 className="font-outfit font-semibold text-lg">Total del carrito</h3>
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
                <b>{(totalPrice + (deliveryPrice === "Express" ? 9 : 0)).toFixed(2)}€</b>
              </p>
            </div>
            <div className="flex justify-end ">
              <p>Incluye {(totalPrice * 0.21).toFixed(2)}€ de IVA</p>
            </div>
          </div>
        </div>



        {!checkout && 
        <div className="flex gap-4 justify-center items-center">
          <Link
            href="/checkoutPage">
            <Button intent={"secondary"} size={"medium"}>Ir al checkout</Button>
          </Link>
          <Link
            href="/shopPage">
            <button className="font-outfit text-[#2A5B45] font-semibold text-sm ">Seguir comprando</button>
          </Link>
        </div>}

        {checkout && 
        <div className="flex gap-4  items-center">
          <Link
            href="/realizarPedidoPage">
            <Button intent={"secondary"} size={"medium"}>Pagar y realizar pedido</Button>
          </Link>
        </div>}

      </div>
    </div>
  );
};

export default TotalCarrito;
