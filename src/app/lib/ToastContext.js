import React, { useState } from 'react';
import { createContext } from "react";

//Context
export const ToastContext = createContext({
  title: "",
  message: "",
  label: "",
  setToastContext: item => { }
});

//ContextProvider
const ToastContextProvider = ({ children }) => {
  const toastState = {
    title: '',
    message: '',
    label: '',
    setToastContext: item => setToastInformation(prevState  => ({ 
      ...prevState,
      title: item.title, 
      message: item.message, 
      label: item.label
     }))
  };
  const [toastInformation, setToastInformation] = useState(toastState);

  return <ToastContext.Provider value={toastInformation}>{children}</ToastContext.Provider>;
}
export default ToastContextProvider;

