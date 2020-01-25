import React from "react";
import { useDispatch } from "react-redux";
import { ProductImage } from "../../atoms/image/Image";
import { removeFromCart } from "../../../lib/actions/shoppingCart";
import { Text } from "../../atoms/text"; 
import { StyledCart, StyledHalfBlock } from './styles'
import { CardHeader } from '../Card'
import { TrashButton, QuantityInput } from './_components'


const ProductInformation = ({ title , isbn }) => (<CardHeader
  title={title}
  subTitle={isbn}
  margin="5"
  fontSize="18" />)
const UnitPrice = ({ price }) => (<Text.BOLD>€{price.toFixed(2)}</Text.BOLD>)
const PriceTotal = ({ price, quantity, classNames }) => (<Text.BOLD classNames={classNames}>€{(price * quantity).toFixed(2)}</Text.BOLD>)

export const CartRow = ({ item }) => {
  const { id, details, quantity } = item
  const { price, title, isbn } = details
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeFromCart(id))
  }

  return (
    <StyledCart>
      <StyledHalfBlock className="first-half">
        <ProductImage {...details} width="80" height="130" />
        <ProductInformation {...details} />
        <UnitPrice {...details} />
      </StyledHalfBlock>

      <StyledHalfBlock className="second-half">
        <QuantityInput {...item} />
        <PriceTotal quantity={quantity} {...details} classNames="price-total"/>
        <TrashButton remove={remove} /> 
      </StyledHalfBlock>
    </StyledCart>
  );
}