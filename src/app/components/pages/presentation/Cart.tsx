import React, { useEffect, useState, useLayoutEffect, useCallback, Fragment } from "react";
import { ShoppingCart } from '../../organismes/ShoppingCart'
import { Text } from "../../atoms/text" 
import Alert, { AlertColor } from "../../molecules/Alert"
import { cartStatus } from "../../../lib/reducers/shoppingCart";
const { COMPLETE, APPROVED } = cartStatus

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
  

const StatusAlert = (props: any) => {
  const { status, approveConfirmOrder, cancelCheckout }  = props
  if (status == COMPLETE) {
    return (<Alert.DISMISSIBLE
      color={AlertColor.INFO}
      message="Do you wish to confirm your order ?"
      action={{ name: approveConfirmOrder, text: "confirm order" }}
      dismissAction={cancelCheckout} />)
  }
  if (status == APPROVED) {
    return (<Alert.CONFIRM
      color={AlertColor.SUCCESS}
      message="Thank you for your order"
      secondary="You will be redirected to the Homepage is a few seconds ..." />)
  }
  return (<span></span>)
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