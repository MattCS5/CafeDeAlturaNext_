import React from "react";
import Check from "../assets/Check.svg";
import Image from "next/image";
import TuPedido from "./TuPedido";

const RealizarPedido = () => {
  return (
    <div className=" flex flex-col m-24 justify-center gap-6 items-center  font-outfit">
      <div className="flex flex-col p-3 bg-[#2A5B45] rounded-3xl w-16 h-16 ">
        <Image
          className="w-10 h-10"
          src={Check}
          alt="logo"
          width={500}
          height={500}
        />
      </div>
      <div>
        <h1 className="font-semibold text-[#2A5B45] text-2xl">
          El pedido ha sido realizado con éxito
        </h1>
      </div>
      <div className="w-[346px] h-[48px]  text-sm font-normal text-center">
        <p>El pedido #12387 se encuentra en preparación.</p>
        <p>Lo recibirás dentro de las fechas acordadas en tu envío.</p>
        <p>Hemos enviado un ticket a tu correo electrónico.</p>
      </div>

      <TuPedido />
    </div>
  );
};

export default RealizarPedido;
