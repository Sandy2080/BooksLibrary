import React, { Fragment } from "react";
import { StyledFooter } from './styles'
import { useSelector } from "react-redux";
import {
  CartButtons,
  CartTotal
} from "./_components"

export const CartFooter = () => {
  const props = useSelector(state => ({
    ...state.shoppingCartReducer
   }));
  const { isPending } = props
  return (
    <Fragment>
      {!isPending &&
        <StyledFooter>
          <CartTotal {...props} />
          <CartButtons />
        </StyledFooter>}
    </Fragment>
)}