"use client";
import React from "react";
import { useContext } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../context/DataContext";
const Origenes = () => {
  const { data } = useContext(DataContext);


  return (
    <div className="flex flex-col  p-10 gap-10 items-center">
      <h2 className="flex text-[rgb(42,91,69)] text-2xl font-medium">
        {" "}
        Últimos orígenes{" "}
      </h2>

      <div className=" flex flex-wrap gap-6 justify-center">
        {data?.map((cafe) => {
          return (
            <ProductCard
              key={cafe.id}
              cafeImg={cafe.img_url}
              name={cafe.brand}
              price={cafe.price}
              available={cafe.available}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Origenes;
