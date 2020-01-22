import React, { useEffect, Fragment, useState, useLayoutEffect } from "react";
import { ShoppingCart } from '../../organismes/ShoppingCart'
import { Book } from "../../../models/Book";
import { Offer } from "../../../models/Offer";

export interface Props {
  items: [];
}
const Cart = (
  props: { items: any; offers: Offer[] } & {
    getOffers: (items: any[]) => void;
  }
) => {
  const { items } = props;
  const loadOffers = () => props.getOffers(items);
  
  useEffect(() => {
      loadOffers()
  }, [items]);

  return (
    <Fragment>
      <ShoppingCart items={items} />
    </Fragment>
  );
};
export default Cart;