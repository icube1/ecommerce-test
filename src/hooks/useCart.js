import { action } from "mobx";
import { useEffect, useState } from "react";

import { cartStore } from "../store/cartStore";

const useCart = () => {

    const [cartState, setCartState] = useState({ cart: [], size: 0 });

  useEffect(() => {
    const cartSize = getCartSize();

    setCartState({ ...cartState, size: cartSize });
  }, [cartState]);
    const addToCart = action((product) => {
      cartStore.cart.push(product);
    });
  
    const removeFromCart = action((product) => {
      const index = cartStore.cart.indexOf(product);
      if (index > -1) {
        cartStore.cart.splice(index, 1);
      }
    });

    const getCartSize = ()=> {
        return cartStore.cart.length;
    }
  
    return { cartStore, cartState, addToCart, removeFromCart, getCartSize };
  };

  export default useCart;