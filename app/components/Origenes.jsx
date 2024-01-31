"use client";
import React from "react";
import { useContext } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../context/DataContext";
const Origenes = () => {
  const { setOpen, data } = useContext(DataContext);

  const sortData = (a, b) => {
    if (!a.available && b.available) {
      return 1;
    }

    if (a.available && !b.available) {
      return -1;
    }
    return 0;
  };
  const sortedData = data?.sort(sortData);

  return (
    <div
      onClick={() => setOpen(false)}
      className="flex flex-col  p-10 gap-10 items-center"
    >
      <h2 className="flex text-[rgb(42,91,69)] text-2xl font-medium">
        Últimos orígenes
      </h2>

      <div className=" grid gap-6 justify-center grid-cols-4">
        {sortedData?.map((cafe) => {
          return (
            <ProductCard
              infoCafe={cafe}
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
