import React from "react";
import { CartBody } from "../molecules/Cart/CartBody";
import { CartFooter }  from "../molecules/Cart/CartFooter";
import { StyledCard } from "../molecules/Card/styles"
import { Title } from "../atoms/text";

const CartEmpty = () => <Title.BOLD color="#666">Your cart is empty</Title.BOLD>
export const ShoppingCart = ({ items }) => {
   const isEmpty = items.length == 0

   if (isEmpty) { return <CartEmpty /> }
   return (<StyledCard className="card">
            <CartBody items={items} />
            <CartFooter />
         </StyledCard>)
};