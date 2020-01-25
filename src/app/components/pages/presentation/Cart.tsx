import React, { useEffect, Fragment, useCallback } from "react";
import { ShoppingCart } from '../../organismes/ShoppingCart'

export interface ICartProps {
  items: [];
}
const Cart = (props: ICartProps & { getOffers: (items: any[]) => void}
) => {
  const { items, getOffers } = props;
  const loadOffers = useCallback(() => getOffers(items), [items, getOffers]);
  useEffect(() => {
      loadOffers()
  }, [items, loadOffers]);

  return (
    <Fragment>
      <ShoppingCart {...props} />
    </Fragment>
  );
};
export default Cart;