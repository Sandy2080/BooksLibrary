import React, { Fragment } from "react";
import { ProductImage } from "../../atoms/image/Image";
import { TextSmall } from "../../atoms/text/Text"; 
import { useDispatch } from "react-redux";
import { updateCart, removeFromCart} from "../../../lib/actions/shoppingCart";
import Icon from "../../atoms/icon"
import { StyledCartRow } from './styles'
import Button, { ButtonSize} from "../../atoms/button"

const Styles = {
  width5: "5%",
  width10: "10%",
  width20: "20%",
  width25: "25%",
  width30: "30%",
  width50: "50%",
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
    style={{ width: Styles.width50 }}
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
      <div style={{ width: Styles.width10 }}>
        <ProductImage {...details} width="80" height="130" />
      </div>
      <div style={{ width: Styles.width30 }}>
        {title} <br /><TextSmall>isbn: {isbn}</TextSmall>
      </div>
      <div style={{ width: Styles.width10 }}>
        <strong>€{price}</strong>
      </div>
      <div style={{ width: Styles.width20 }}>
        <Input {...item} />
      </div>
      <div style={{ width: Styles.width25 }}>
        <strong>€{(price * quantity).toFixed(2)}</strong>
      </div>
      <div style={{ width: Styles.width5 }}>
        <TrashButton remove={remove} />
      </div>
    </StyledCartRow>
  );
}