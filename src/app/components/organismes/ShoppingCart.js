
import React from "react";
import { CartBody } from "../molecules/Cart/CartBody";
import { CartFooter } from "../molecules/Cart/CartFooter";

export const ShoppingCart = ({ items }) => (
         <div className="card">
            <CartBody items={items} /> 
            <CartFooter />
         </div>
       );