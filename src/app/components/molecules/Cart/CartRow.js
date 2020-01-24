import React from "react";
import { ProductImage } from "../../atoms/image/Image";
import { useDispatch } from "react-redux";
import { updateCart, removeFromCart } from "../../../lib/actions/shoppingCart";
import { TextBold } from "../../atoms/text/Text"; 
import { StyledCart, StyledHalfBlock } from './styles'
import { CardHeader } from '../Card'
import { TrashButton } from './_components'
import Input, { InputSize } from "../../atoms/input"

const QuantityInput = ({ id, quantity }) => {
  const dispatch = useDispatch();
  const update = e => dispatch(updateCart(id, e.target.value))
  const attributes = { 'min': '2', 'max': '100', 'stepValue': '1', 'defaultValue': quantity }
  return (
  <div>
    <Input.STEPPER
      classNames="stepper-input"
      action={e => update(e)}
      size={InputSize.SMALL}
      {...attributes}>
    </Input.STEPPER>
    </div>)
}
export const CartRow = ({ item }) => {
  const { id, details, quantity } = item
  const { price } = details
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeFromCart(id))
  }
  return (
    <StyledCart>
      <StyledHalfBlock className="first-half">
        <ProductImage {...details} width="80" height="130"  />
        <CardHeader {...details} />
        <TextBold>€{price.toFixed(2)}</TextBold>
      </StyledHalfBlock>

      <StyledHalfBlock className="second-half">
        <QuantityInput {...item} />
        <TextBold>€{(price * quantity).toFixed(2)}</TextBold>
        <TrashButton remove={remove} /> 
      </StyledHalfBlock>
    </StyledCart>
  );
}