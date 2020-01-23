
import React from "react";
import { CartBody } from "../molecules/Cart/CartBody";
import { CartFooter } from "../molecules/Cart/CartFooter";

export const ShoppingCart = ({ items }) => (
         <div className="card">
           {items.length ?
              <CartBody items={items} /> :
              <p>Your cart is empty</p>
           }
           
           <CartFooter />
         </div>
       );