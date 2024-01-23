import React from "react";
import Button from "./Button";

// import { DataContext } from "../context/DataContext";

const ProductCard = ({ cafeImg, name, price, available, funcion }) => {
  // const { data } = useContext(DataContext);
  // console.log(data);
  return (
    <div className={`group ${available ? "opacity-100" : "opacity-40"}`}>
      <div className="flex flex-col gap-6 border-2 rounded group-hover:bg-[#E3DED7] p-6 justify-center items-center">
        <img src={cafeImg} alt="cafe" />
        <div className="flex flex-col gap-3 items-center">
          <p className="text-sm font-semibold">{name}</p>
          <p>{price.toFixed(2)}€</p>
        </div>
        <Button
    
          onClick={ funcion}
          intent={available ? "añadir" : "agotado"}
          size={"small"}
          className={`font-outfit ${
            available
              ? "bg-[#6A8C7D] group-hover:bg-[#2A5B45]  rounded p-2 text-white"
              : "bg-[#c3b298] rounded p-2 text-white"
          }`}
        >
          {available ? " Añadir" : "Agotado"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;