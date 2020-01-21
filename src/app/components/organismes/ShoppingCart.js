
import React from "react";
import { CartBody } from "../molecules/CartBody";
import { CartFooter } from "../molecules/CartFooter";

export const ShoppingCart = ({ items }) => (
         <div className="card">
           <CartBody items={items} />
           <CartFooter />
         </div>
       );