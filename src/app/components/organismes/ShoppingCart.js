import React, { Fragment } from "react";
import { Link } from "react-router-dom" 
import { CartBody } from "../molecules/Cart/CartBody";
import { CartFooter }  from "../molecules/Cart/CartFooter";
import { StyledCard } from "../molecules/Card/styles"
import { Title } from "../atoms";

const CartEmpty = () => (
  <Fragment>
    <Title.BOLD color="#666">Your cart is empty</Title.BOLD>
    <Link to="/">Back to Homepage</Link>
  </Fragment>
);
const ShoppingCart = ({ items }) => {
   const isEmpty = items.length === 0

   if (isEmpty) { return <CartEmpty /> }
   return (<StyledCard className="card">
            <CartBody items={items} />
            <CartFooter />
         </StyledCard>)
};
export default ShoppingCart;