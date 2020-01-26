import React, { useEffect, useState, useLayoutEffect, useCallback, Fragment } from "react";
import { Text } from "../../atoms/text" 
import { cartStatus } from "../../../lib/reducers/shoppingCart";
import {
  ShoppingCart,
  StatusAlert
} from '../../organismes'


const Loading = () => {
  const [index, setIndex] = useState(0)
  const [loadingDots, set] = useState(".")
  const dots = [".", "..", "..."]
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index < dots.length - 1 ? index + 1 : 0)
      set(dots[index])
    }, 500);
    console.log(index)
    return () => clearTimeout(timer); 
  }, [index])

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
  
  useEffect(() => {
      loadOffers()
  }, [items, loadOffers]);
  useLayoutEffect(() => {
    console.log(`re-rendered on cart status change ${cartStatus}`)
  }, [cartStatus])

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
          {status == cartStatus.APPROVED ? 
          <Loading /> :
        <ShoppingCart {...props} />
      }
    </Fragment>
  );
};
export default Cart;