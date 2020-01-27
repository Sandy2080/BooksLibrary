import React, { useState } from 'react';
import { createContext } from "react";

//Context
export const CartContext = createContext({
  title: "",
  message: "",
  label: "",
  setCartContext: item => { }
});

//ContextProvider
const CartContextProvider = ({ children }) => {
  const cartState = {
    title: '',
    message: '',
    label: '',
    setCartContext: item => setCartInformation(prevState  => ({ 
      ...prevState,
      title: item.title, 
      message: item.message, 
      label: item.label
     }))
  };
  const [cartInformation, setCartInformation] = useState(cartState);

  return <CartContext.Provider value={cartInformation}>{children}</CartContext.Provider>;
}
export default CartContextProvider;

