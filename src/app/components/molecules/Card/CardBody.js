import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { TextTruncate } from "../../atoms/text/Text";
import { addToCart } from "../../../lib/actions/shoppingCart";
import Button, { ButtonSize, ButtonTheme }  from '../../atoms/button/index'

const AddToCart = ({ item, children }) => {
  const dispatch = useDispatch()
  const addCart = () => dispatch(addToCart(item))
  return (
    <Button.INFO 
      classNames="float-right" 
      customColor="#2980b9" 
      theme={ButtonTheme.ROUNDED}
      size={ButtonSize.SMALL}
      action={addCart}>
      {children}
    </Button.INFO >
  );

}
export const CardBody = ({ item }) => {
  const { synopsis } = item
  return (
  <Fragment>
    <TextTruncate>{synopsis}</TextTruncate>
    <AddToCart item={item}>Add to Cart</AddToCart>
  </Fragment>)
}
