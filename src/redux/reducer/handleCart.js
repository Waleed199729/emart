const cart =  JSON.parse(localStorage.getItem('cart'))||[];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        const cartItem = state.map((x) =>
          x.id === product.id ? { ...x, qty: (x.qty ?? 0) + 1 } : x                                                                               //it evaluate the x.qty is not null or undefined and add 1 otherwise evaluate 0
        );
        localStorage.setItem("cart", JSON.stringify(cartItem))
        return cartItem
      } else {
        const cartItem = [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
        localStorage.setItem("cart", (JSON.stringify(cartItem)))
        return cartItem


      }


    case "DELITEM":
      // const CartItems = JSON.parse(localStorage.getItem('cart'));
      // console.log(CartItems)
      const delItem = state.filter((x) => x.id !== product.id)
      console.log(delItem);
      localStorage.setItem("cart", JSON.stringify(delItem))
      console.log(delItem)
      return delItem;


    case "INCREMENT_QUANTITY":
      const increamentQuantity = state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x );

      localStorage.setItem("cart", JSON.stringify(increamentQuantity));
      return increamentQuantity;

    case "DECREMENT_QUANTITY":
      if (product.qty === 1) {
        const decreamentQuantity = state.filter((x) => x.id !== product.id);
        localStorage.setItem("cart", JSON.stringify(decreamentQuantity));
        return decreamentQuantity
      } else {
        const decreamentQuantity = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
        localStorage.setItem("cart", JSON.stringify(decreamentQuantity));

        return  decreamentQuantity
      }



    case "RESET":
      return []


    default:
      return state;
  }
};

export default handleCart;


// cartReducer.js
// const cart=[];
// const handleCart = (state = {cart:[]} , action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const updatedCartAdd = [...state.cart, action.payload];
//       localStorage.setItem('cart', JSON.stringify(updatedCartAdd));
//       return {
//         ...state,
//         cart: updatedCartAdd,
//       };

//     case 'DELETE_FROM_CART':
//       const updatedCartDelete = state.cart.filter(
//         item => item.id !== action.payload
//       );
//       localStorage.setItem('cart', JSON.stringify(updatedCartDelete));
//       return {
//         ...state,
//         cart: updatedCartDelete,
//       };

//     case 'UPDATE_QUANTITY':
//       const { itemId, quantity } = action.payload;
//       const updatedCartQty = state.cart.map(item => {
//         if (item.id === itemId) {
//           return {
//             ...item,
//             quantity: quantity,
//           };
//         }
//         return item;
//       });
//       localStorage.setItem('cart', JSON.stringify(updatedCartQty));
//       return {
//         ...state,
//         cart: updatedCartQty,
//       };

//     default:
//       return state;
//   }
// };

// export default handleCart;
