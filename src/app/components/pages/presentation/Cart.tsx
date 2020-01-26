import React, { useEffect, useLayoutEffect, useCallback, Fragment  } from "react";
import { ShoppingCart } from '../../organismes/ShoppingCart'
import Alert, { AlertColor } from "../../molecules/Alert"
import { approveCart } from "../../../lib/actions/shoppingCart";
import { cartStatus } from "../../../lib/reducers/shoppingCart";

const StatusAlert = (props: any) => {
  const { status, approveConfirmOrder}  = props
  const { COMPLETE, APPROVED } = cartStatus
  if (status == COMPLETE) {
    return (<Alert.CONFIRM
      color={AlertColor.INFO}
      message="Do you wish to confirm your order ?"
      action={{ name: approveConfirmOrder, text: "confirm order" }} />)
  }
  if (status == APPROVED) {
    return (<Alert.DISMISSIBLE
      color={AlertColor.INFO}
      message="Thank you for your order" />)
  }
  return (<span></span>)
}

export interface ICartProps {
  items: [];
  cartStatus: any
}
const Cart = (props: ICartProps & { 
  getOffers: (items: any[]) => void, 
  approveCart: () => void,
  reset: () => void }) => {
  const { items, getOffers, reset, cartStatus } = props;
  const loadOffers = useCallback(() => getOffers(items), [items, getOffers]);
  
  useEffect(() => {
      loadOffers()
  }, [items, loadOffers]);

  useLayoutEffect(() => {
    console.log(`re-rendered on cart status change ${cartStatus}`)
  }, [cartStatus])

  const approveConfirmOrder = () => {
      approveCart()
      reset()
  }
 
  return (
    <Fragment>
      <Alert.CONFIRM
        color={AlertColor.INFO}
        message="Do you wish to confirm your order ?"
        action={{ name: approveConfirmOrder, text: "confirm order" }} />
      <StatusAlert status={cartStatus} approveConfirmOrder={approveConfirmOrder} />
      <ShoppingCart {...props} />

    </Fragment>
  );
};
export default Cart;