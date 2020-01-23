import React, { Fragment, useEffect  } from "react";
import { Link } from "react-router-dom";
import { StyledFooter, StyledRow } from './styles'
import { TextBold } from "../../atoms/text/Text"
import  Divider  from '../../atoms/divider' 
import { useDispatch, useSelector } from "react-redux";
import { setDiscount } from "../../../lib/actions/shoppingCart";
import Button, { ButtonTheme } from "../../atoms/button";
import Icon from "../../atoms/icon"

const TotalRow = ({ total_cart, discountedOffer, isPending }) => {
  const { type, value, discountValue } = discountedOffer
  return (
    <StyledRow>
      <ul>
        <li>
          <TextBold>Subtotal: &nbsp; &nbsp;{total_cart.toFixed(2)}€</TextBold>
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
      <Link to="/">
        <Button.INFO theme={ButtonTheme.ROUNDED}>
          <Icon.CHEVRON_LEFT /> 
          &nbsp; Continue Shopping 
        </Button.INFO>
      </Link>
    </li>
  </ul>
);

const TotalCart = ({ total_cart, discountedOffer, isPending  }) => {
  const { discountValue } = discountedOffer
  const total = total_cart - discountValue  
  return (<div>
    <TextBold> Total: &nbsp; {total.toFixed(2)}€</TextBold>
    <CheckoutButton />
  </div>)
}

 
const CheckoutButton = () => {
  const handleCheckout = e => e.preventDefault()
  return(
    <Button.SUCCESS 
      className="checkout" 
      theme={ButtonTheme.ROUNDED}
      action={handleCheckout}>
        Checkout&nbsp; <Icon.CHEVRON_RIGHT />
    </Button.SUCCESS>)
 
}
export const CartFooter = () => {
  const props = useSelector(state => ({
    ...state.shoppingCartReducer
  }));
  const {  isPending } = props
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setDiscount())
  }, [dispatch])

  useEffect(() => {
    dispatch(setDiscount())
  }, [])
  
return (
  <Fragment>
    {!isPending &&
      <Fragment>
      <TotalRow {...props} />
      <StyledFooter>
        <Divider />
        <div className="footer">
          <ShoppingButton />
            <TotalCart {...props}  />
        </div>
      </StyledFooter>
    </Fragment>
    }
   </Fragment>
);

}