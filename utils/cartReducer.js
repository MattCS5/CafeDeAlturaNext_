const cartReducer = (cart, dispatch) => {
  switch (dispatch.action) {
    case "ADD_ITEM":
      return [
        ...cart,
        {
          id: dispatch.product._id,
          name: dispatch.product.brand,
          price: dispatch.product.price,
        },
      ];

    case "REMOVE_ITEM":
      return cart.filter((item) => item._id !== dispatch.productId);

    default:
      return cart;
  }
};

export default cartReducer;
