"use client";
import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import BagProductCard from "./BagProductCard";
import TotalCarrito from "./TotalCarrito";

const Cesta = () => {
  const { setOpen, totalCuantity } = useContext(DataContext);

  return (
    <div onClick={() => setOpen(false)} className="h-screen">
      <h1 className="flex justify-center items-center  font-outfit text-2xl font-medium text-[#2A5B45] pt-10">
        Cesta ({totalCuantity})
      </h1>

      <div className=" flex  p-10  gap-6 font-outfit justify-between">
        <BagProductCard />

        <div>
          <TotalCarrito />
        </div>
      </div>
    </div>
  );
};

export default Cesta;
