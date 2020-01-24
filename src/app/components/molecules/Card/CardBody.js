import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { TextTruncate } from "../../atoms/text/Text";
import { addToCart } from "../../../lib/actions/shoppingCart";
import Button, { ButtonSize, ButtonTheme }  from '../../atoms/button/index'
import useWindowDimensions from '../../../utils/hooks/useWindowDimensions';

const AddToCart = ({ item, children }) => {
  const dispatch = useDispatch()
  const addCart = () => dispatch(addToCart(item))
  const { width } = useWindowDimensions();
  const isMobile =  width < 640
  const { SMALL, LARGE } = ButtonSize
  const { ROUNDED } = ButtonTheme
  return (
    <Button.INFO  
      theme={ROUNDED}
      size={isMobile ? LARGE : SMALL}
      action={addCart}
      customColor="#2980b9" 
      classNames={`float-right ${isMobile && `btn-block`}`}
      >

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
