import React from "react";
import { ProductImage } from "../../atoms/image/Image";
import { useDispatch } from "react-redux";
import { updateCart, removeFromCart } from "../../../lib/actions/shoppingCart";
import { TextBold } from "../../atoms/text/Text"; 
import { StyledCart, StyledHalfBlock } from './styles'
import { TrashButton, ProductInformationCol } from './_components'

const QuantityInput = ({ id, quantity }) => {
  const dispatch = useDispatch();
  return (
  <div>
    <input className="form-control input-sm"
      max="100"
      min="1"
      name="size"
      step="1"
      type="number"
      defaultValue={quantity}
      onChange={e => dispatch(updateCart(id, e.target.value))}
    />
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
        <ProductImage {...details} width="80" height="130" s />
        <ProductInformationCol {...details} />
        <TextBold>€{price.toFixed(2)}</TextBold>
      </StyledHalfBlock>

      <StyledHalfBlock className=" second-half">
        <QuantityInput {...item} />
        <TextBold>€{(price * quantity).toFixed(2)}</TextBold>
        <TrashButton remove={remove} /> 
      </StyledHalfBlock>
    </StyledCart>
  );
}