
import React from "react";
import { CartComponent } from "../molecules/Cart/CartBody";
import { CartFooter } from "../molecules/Cart/CartFooter";

export const ShoppingCart = ({ items }) => (
   <div className="card">
      <CartComponent items={items} /> 
      <CartFooter />
   </div>
);