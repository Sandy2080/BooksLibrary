import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledFooter, StyledRow } from './styles'
import { TextBold } from "../atoms/Text"
import { Divider } from '../atoms/Divider' 
import { useDispatch, useSelector } from "react-redux";
import { setDiscount } from "../../lib/actions/shoppingCart";
import Button from "../atoms/button/index";

const TotalRow = ({ subTotal, discountedOffer }) => {
  const { type, value, discountValue } = discountedOffer
  return (
    <StyledRow>
      <ul>
        <li>
          <TextBold>Subtotal: &nbsp; &nbsp;{subTotal.toFixed(2)}€</TextBold>
        </li>
        <li>
          {(type === "minus" || type === "slice") && (
            <TextBold>Discount: &nbsp; - {discountValue.toFixed(2)}€</TextBold>
          )}
          { type === "percentage" && (
            <TextBold>
              Discount: ({value}%)  &nbsp; -{discountValue}€
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
)
 
const CheckoutButton = () => {
  const onCheckoutClick = e => {
    e.preventDefault()
  };
  return(
  <Button.SUCCESS className="checkout" action={onCheckoutClick}>
          Checkout&nbsp;
        <i className="fas fa-chevron-right"></i>
  </Button.SUCCESS>)
 
}
export const CartFooter = () => {
  const { total_cart, discountedOffer } = useSelector(state => ({
    ...state.shoppingCartReducer
  }));
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    dispatch(setDiscount())
  }, [dispatch])

  useEffect(() => { 
    setTotal(total_cart - discountedOffer.discountValue)
  }, [total_cart, discountedOffer])
  
return (
  <Fragment>
    <Divider />
    <TotalRow subTotal={total_cart} discountedOffer={discountedOffer} />
    <StyledFooter>
      <Divider />
      <div className="footer">
          <ShoppingButton />
        <TotalCart total={total} />
      </div>
    </StyledFooter>
  </Fragment>
);

}