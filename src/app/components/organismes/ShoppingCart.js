
import React from "react";
import { CartBody } from "../molecules/CartBody";
import { CartFooter } from "../molecules/CartFooter";

export const ShoppingCart = ({ items }) => (
         <div className="card">
           {items.length ?
              <CartBody items={items} /> :
              <p>Your cart is empty</p>
           }
           
           <CartFooter />
         </div>
       );