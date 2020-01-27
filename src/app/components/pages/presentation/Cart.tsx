import React, { useEffect, useState, useCallback, Fragment } from "react";
import { cartStatus } from "../../../lib/reducers/shoppingCart";
import { Text } from "../../atoms" 
import ShoppingCart from '../../organismes/ShoppingCart';
import StatusAlert from '../../organismes/StatusAlert';

const Loading = () => {
  const [index, setIndex] = useState(0)
  const [loadingDots, set] = useState(".")
  const dots = [".", "..", "..."]
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index < dots.length - 1 ? index + 1 : 0)
      set(dots[index])
    }, 500);
    return () => clearTimeout(timer); 
  }, [index, dots])

  return (<Fragment>
            <br />
            <Text.NORMAL fontSize="25">Loading {loadingDots}</Text.NORMAL>
          </Fragment>)
}
export interface ICartProps {
  items: [];
  status: any
  history: any
}
const Cart = (props: ICartProps & { 
  getOffers: (items: any[]) => void, 
  approveCart: () => void,
  cancelCheckout: () => void,
  reset: () => void }) => {
  const { items, getOffers, reset, status, approveCart, cancelCheckout, history } = props;
  const loadOffers = useCallback(() => getOffers(items), [items, getOffers]);
  const scrollToTop = (bool: Boolean) => {
    if (bool) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }
  useEffect(() => {
      loadOffers()
      scrollToTop(status === cartStatus.COMPLETE);
  }, [items, loadOffers, status]);

  const approveConfirmOrder = () => {
    approveCart()
    const timer = setTimeout(() => {
      reset()
      history.push('/')
    }, 5000);
    return () => clearTimeout(timer); 
  }
 
  return (
    <Fragment>
      <StatusAlert 
        status={status} 
        approveConfirmOrder={approveConfirmOrder} 
        cancelCheckout={cancelCheckout}/>
          {status === cartStatus.APPROVED ? 
          <Loading /> :
        <ShoppingCart {...props} />
      }
    </Fragment>
  );
};
export default Cart;