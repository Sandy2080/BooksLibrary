import React, { Fragment, useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { StyledFooter, StyledRow } from './styles'
import { TextBold } from "../atoms/Text"
import { Divider } from '../atoms/Divider' 
import { useDispatch, useSelector } from "react-redux";
import { setDiscount } from "../../lib/actions/shoppingCart";

const TotalRow = ({ subTotal, discountedOffer }) => {
  const { discount, offer } = discountedOffer
  return (
    <StyledRow>
      <ul>
        <li>
          <TextBold>Subtotal: &nbsp; &nbsp;{subTotal.toFixed(2)}€</TextBold>
        </li>
        <li>
          {(offer.type == "minus" || offer.type == "slice") && (
            <TextBold>Discount: &nbsp; - {offer.value.toFixed(2)}€</TextBold>
          )}
          {offer.type == "percentage" && (
            <TextBold>
              Discount: ({offer.value}%)  &nbsp; -{subTotal * offer.value / 100}€
            </TextBold>
          )}
        </li>
      </ul>
      <br />
    </StyledRow>
  );
};

const ShoppingButton = () => (
  <ul>
    <li>
      <Link to="/" className="btn btn-info">
        <i className="fas fa-chevron-left"></i>&nbsp; Continue Shopping
      </Link>
    </li>
  </ul>
);

const TotalCart = ({ total }) => (
  <div>
    <TextBold> Total: &nbsp; {total.toFixed(2)}€</TextBold>
    <CheckoutButton />
  </div>
);
const CheckoutButton = () => {
  const onCheckoutClick = e => {
    e.preventDefault()
  };
  return(<a
        href="#"
        className="btn btn-success checkout"
        onClick={e => onCheckoutClick(e)}
      >
        Checkout&nbsp;
        <i className="fas fa-chevron-right"></i>
      </a>)
 
}
export const CartFooter = () => {
  const { total_cart, discountedOffer } = useSelector(state => ({
    ...state.shoppingCartReducer
  }));
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    dispatch(setDiscount())
  }, [total_cart])
return (
  <Fragment>
    <Divider />
    <TotalRow subTotal={total_cart} discountedOffer={discountedOffer} />
    <StyledFooter>
      <Divider />
      <div className="footer">
          <ShoppingButton />
          <TotalCart total={discountedOffer.discount} />
      </div>
    </StyledFooter>
  </Fragment>
);

}