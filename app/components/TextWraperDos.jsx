import React from "react";
import Link from "next/link";
import flecha from "../assets/Flecha.svg";
import Image from "next/image";

const TextWraperDos = () => {
  return (
    <div className=" flex flex-col  gap-4 w-[457px] ">
      <h2 className="text-[24px] text-[#2A5B45] font-medium  ">
        Pruébalo en nuestro coffee shop
      </h2>
      <p className="text-[#111827] font-normal text-sm ">
        Visita nuestra cafetería en el centro de la ciudad para probar los
        granos de café antes de hacer tu pedido y llévate un descuento
      </p>

      <Link
        className="flex gap-4 font-outfit font-semibold text-sm"
        href="/sobreNosotros"
      >
        <p>
          <u>Cómo llegar</u>
        </p>
        <Image width={20} height={20} src={flecha} alt="flecha" />
      </Link>
    </div>
  );
};

export default TextWraperDos;
