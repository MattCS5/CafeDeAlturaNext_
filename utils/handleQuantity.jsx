const handleAddToCart = (product) => {
  dispatch({
    accion: "ADD_ITEM",
    products: product,
  });
};

const handleRemoveAllToCart = (product) => {
  dispatch({ accion: "REMOVE_ITEM", products: product });
};
