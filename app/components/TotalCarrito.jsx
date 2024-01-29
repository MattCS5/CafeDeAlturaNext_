import React from "react";
import Button from "./Button";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useForm, useWatch } from 'react-hook-form';



const TotalCarrito = () => {

  const { totalPrice } = useContext(DataContext);
  const { control } = useForm();
  const selectedEnvioOption = useWatch({
      control,
      name: 'envioOption',
  });

  console.log('selectedEnvioOption:', selectedEnvioOption);

  const calcularPrecioTotal = () => {
      const costoEnvio = selectedEnvioOption === 'opcion2' ? 9.00 : 0.00;
      const total = totalPrice + costoEnvio;
      return total.toFixed(2);
  };

  console.log('calcularPrecioTotal():', calcularPrecioTotal());
  return (
    <div className="flex flex-col rounded bg-[#F7F5F3] ">
      <div className=" flex flex-col gap-4 p-6">
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

            <div className="flex justify-between">
              <p>ENVÍO</p>
              <p>
                <b>?</b>
              </p>
            </div>
            <div className="h-[1px] bg-[#E3DED7]"></div>

            <div className="flex justify-between">
              <p>
                <b>TOTAL</b>
              </p>
              <p>
                <b>{calcularPrecioTotal()}€</b>
              </p>
            </div>
            <div className="flex justify-end ">
              <p>Incluye {totalPrice * 0.21.toFixed(2)}€ de IVA</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
        <Button intent={"secondary"} size={"medium"}>Ir al checkout</Button>
        <button className="text-[#2A5B45] font-outfit font-semibold text-sm ">Seguir comprando</button>
        </div>
      </div>
    </div>
  );
};

export default TotalCarrito;
