const cartReducer = (cart, dispatch) => {
  switch (dispatch.action) {
    case "ADD_ITEM":
      return [
        ...cart,
        {
          id: dispatch.products._id,
          name: dispatch.products.brand,
          price: dispatch.products.price,
        },
      ];

    case "REMOVE_ITEM":
      return cart.filter((item) => item._id !== dispatch.product);

    default:
      return cart;
  }
};

export default cartReducer;
