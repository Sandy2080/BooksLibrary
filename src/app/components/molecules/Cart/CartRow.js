import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../lib/actions/shoppingCart";
import { isMobile } from '../../../utils/hooks/useWindowDimensions';
import { ProductImage } from "../../atoms/image/Image";
import { Text } from "../../atoms/text"; 
import { StyledCart, StyledHalfBlock } from './styles'
import { CardHeader } from '../Card'
import { TrashButton, QuantityStepper } from './_components'

const ProductInformation = ({ title, isbn, classNames }) =>  {
  return (<CardHeader
            classNames={classNames}
            title={title}
            subTitle={isbn}
            titleFontSize={isMobile ? "14" : "19"}
            subTitleFontSize={isMobile ? "9" : "12"} />)
}
const UnitPrice = ({ price }) => (<Text.SEMIBOLD>€{price.toFixed(2)}</Text.SEMIBOLD>)
const PriceTotal = ({ price, quantity }) => (<Text.BOLD>€{(price * quantity).toFixed(2)}</Text.BOLD>)

export const CartRow = ({ item }) => {
  const { id, details, quantity } = item
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeFromCart(id))
  }
  return (
    <StyledCart>
      <StyledHalfBlock className="first-half">
        <ProductImage {...details} width="80" />
        <ProductInformation {...details}/>
        <UnitPrice {...details} />
      </StyledHalfBlock>

      <StyledHalfBlock className="second-half">
        <QuantityStepper {...item} /> 
        <PriceTotal quantity={quantity} {...details} />
        <TrashButton remove={remove} /> 
      </StyledHalfBlock>
    </StyledCart>
  );
}