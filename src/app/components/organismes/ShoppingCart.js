import React from "react";
import { CartComponent } from "../molecules/Cart/CartBody";
import { CartFooter }  from "../molecules/Cart/CartFooter";
import { StyledCard } from "../molecules/Card/styles"

export const ShoppingCart = ({ items }) => (
   <StyledCard className="card">
      <CartComponent items={items} /> 
      <CartFooter />
   </StyledCard>
);