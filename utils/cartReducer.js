const cartReducer = (cart, dispatch) => {


  switch (dispatch.accion) {
    case "ADD_ITEM":
      // const productCoffe= card.find((item)=>item._id=== dispatch.item._id);
      return [
        ...cart,
        {
          id: dispatch.products._id,
          name: dispatch.products.brand,
          price: dispatch.products.price,
          img: dispatch.products.img_url,
        },
      ];

    case "REMOVE_ALL":
      
      return cart.filter((item) => item.id === dispatch.products.id);
      
    case "REMOVE_ITEM":
      return cart.filter(item => item.id !== dispatch.products.id);

    default:
      return cart;
  }
};

export default cartReducer;
