const cartReducer = (cart, dispatch) => {
  switch (dispatch.accion) {
    case "ADD_ITEM":
      const existItem = cart.find(item => item.id === dispatch.products._id);

      
      if (existItem) {
        // Si el producto ya existe en el carrito, incremento la cantidad
        return cart.map(item =>
          item.id === dispatch.products._id ? { ...item,
             quantity: item.quantity + 1 } 
             : item
        );
        
      } else {
        // Si el producto no existe en el carrito, lo agrego con cantidad 1
        return [
          ...cart,
          {
            id: dispatch.products._id,
            name: dispatch.products.brand,
            price: dispatch.products.price,
            img: dispatch.products.img_url,
            quantity: 1, // propiedad para almacenar la cantidad
          },
        ];
      }

    case "REMOVE_ALL":
      return cart.filter(item => item.id === dispatch.products.id);

   
    
    
      case "COUNTER":
       
        return cart.map(item =>
          item.id === dispatch.products.id
            ? { ...item, quantity: dispatch.plusOrMinus === "INCREMENT" ? item.quantity + 1 : item.quantity - 1 }
            : item
            
        ).filter(item => item.quantity > 0);

      
    default:
      return cart;
  }
};

export default cartReducer;


// const cartReducer = (cart, dispatch) => {


//   switch (dispatch.accion) {
//     case "ADD_ITEM":
//       // const productCoffe= card.find((item)=>item._id=== dispatch.item._id);
//       return [
//         ...cart,
//         {
//           id: dispatch.products._id,
//           name: dispatch.products.brand,
//           price: dispatch.products.price,
//           img: dispatch.products.img_url,
//         },
//       ];

//     case "REMOVE_ALL":
      
//       return cart.filter((item) => item.id === dispatch.products.id);
      
//     case "REMOVE_ITEM":
//       return cart.filter(item => item.id !== dispatch.products.id);

//     case "COUNTER":
//       return 

//     default:
//       return cart;
//   }
// };

// export default cartReducer;
