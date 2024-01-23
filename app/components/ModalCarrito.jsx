"use client";

import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const ShoppingCart = () => {
  const { state, dispatch } = useContext(DataContext);

  const handleRemoveFromCart = (itemId) => {
    dispatch({ action: "REMOVE_ITEM", product: itemId });
  };

  if (state.length === 0) {
    return (
      <div className="fixed top-16 right-0 p-5 bg-black text-white rounded-b-xl font-outfit">
        <h2>El carrito está vacío...</h2>
      </div>
    );
  }

  return (
    <div className="fixed top-16 right-0 p-5 bg-black text-white rounded-b-xl font-outfit">
      <h2>Shopping Cart</h2>
      {state.map((item) => (
        <div className="card" style={{ width: "18rem" }} key={item.id}>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Price: {item.price}</p>
            <button
              className="bg-red-400"
              type="button"
              onClick={() => handleRemoveFromCart(item._id)}
            >
              Remove from Cart
            </button>
            <button
              className="bg-red-400"
              type="button"
              onClick={() => handleAddFromCart(item._id)}
            >
              Add from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
