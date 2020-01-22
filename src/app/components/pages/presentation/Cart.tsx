import React, { useEffect, Fragment, useCallback } from "react";
import { ShoppingCart } from '../../organismes/ShoppingCart'
import { Offer } from "../../../models/Offer";

export interface Props {
  items: [];
}
const Cart = (
  props: { items: any; offers: Offer[] } & {
    getOffers: (items: any[]) => void;
  }
) => {
  const { items, getOffers } = props;
  const loadOffers = useCallback(() => getOffers(items), [items, getOffers]);

  useEffect(() => {
      loadOffers()
  }, [items, loadOffers]);

  return (
    <Fragment>
      <ShoppingCart items={items} />
    </Fragment>
  );
};
export default Cart;