"use client";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Link from "next/link";

const Carrito = () => {

  const { state, dispatch } = useContext(DataContext);

  const handleRemoveFromCart = (itemId) => {
    dispatch({ action: "REMOVE_ITEM", product: itemId });
  };

  return (
    <div>
      <div className="fixed top-16 right-0 p-5 bg-black text-white rounded-b-xl font-outfit">
      <h2>Shopping Cart</h2>
      {state.map((item) => (
        <div className="card" style={{ width: "18rem" }} key={item.id}>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Price: {item.price}</p>
            <button
              className="text-red-400 font-outfit"
              type="button"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <div className="flex flex-col pt-3">
        <Link
          href="/bagShopPage"
          className="flex gap-2 py-3 px-6 rounded bg-[#515051]"
        >
          Ir a la Cesta
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Carrito