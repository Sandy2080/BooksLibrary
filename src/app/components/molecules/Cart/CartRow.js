import React, { Fragment } from "react";
import { ProductImage } from "../../atoms/image/Image";
import { TextSmall } from "../../atoms/text/Text"; 
import { useDispatch } from "react-redux";
import { updateCart, removeFromCart} from "../../../lib/actions/shoppingCart";
import Icon from "../../atoms/icon"
import Button, { ButtonSize} from "../../atoms/button"
import { StyledCartRow, Wrapper } from './styles'

const Styles = {
  width5: "5%",
  width10: "10%",
  width20: "20%",
  width25: "25%",
  width30: "30%",
  width50: "50%",
  width80: "80%"
};

const TrashButton = ({ remove }) => (
  <Button.DANGER action={remove} size={ButtonSize.SMALL}>
    <Icon.TRASH color="#dc3545" />
  </Button.DANGER>
)

const Input = ({ id, quantity }) => {
  const dispatch = useDispatch();
  return (<input
    className="form-control input-sm"
    max="100"
    min="1"
    name="size"
    step="1"
    type="number"
    defaultValue={quantity}
    onChange={e => dispatch(updateCart(id, e.target.value))}
  />)
}
export const CartRow = ({ item }) => {
  const { id, details, quantity } = item
  const { isbn, title, price } = details
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeFromCart(id))
  }
  return (
    <StyledCartRow>
      <div className="half-block">
        <ProductImage {...details} width="80" height="130" />
        <div>
          <p>{title}</p> 
          <TextSmall>isbn: {isbn}</TextSmall>
        </div>
         <div><strong>€{price}</strong></div>
      </div>

      <div className="half-block">
        <div >
          <Input {...item} />
        </div>
        <div >
          <strong>€{(price * quantity).toFixed(2)}</strong>
        </div>
        <div >
          <TrashButton remove={remove} />
        </div>
      </div>
    </StyledCartRow>
  );
}