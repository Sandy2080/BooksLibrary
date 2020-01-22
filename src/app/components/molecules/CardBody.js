import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { TextTruncate } from "../atoms/Text";
import { addToCart } from "../../lib/actions/shoppingCart";
import Button from '../atoms/button/index'

const AddToCart = ({ item, children }) => {
  const dispatch = useDispatch()
  const addCart = () => dispatch(addToCart(item))
  return (
    <Button.INFO.SM classNames="float-right" action={addCart} customColor="tomato">
      {children}
    </Button.INFO.SM>
  );

}
export const CardBody = ({ item }) => (
  <Fragment>
    <TextTruncate>{item.synopsis}</TextTruncate>
    <AddToCart item={item}>Add to Cart</AddToCart>
  </Fragment>
);