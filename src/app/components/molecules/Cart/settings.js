import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { StyledCartRow } from './styles'
import { TextBold } from "../../atoms/text/Text"
import Button, { ButtonTheme, ButtonSize } from "../../atoms/button";
import Icon from "../../atoms/icon"
import Divider from "../../atoms/divider";
import { StyledCartButtons } from "./styles";

const ShoppingButton = () => (
    <Link to="/">
        <Button.INFO theme={ButtonTheme.ROUNDED}>
            <Icon.CHEVRON_LEFT /> &nbsp; Continue Shopping
        </Button.INFO>
    </Link>);
const CheckoutButton = () => {
    const handleCheckout = e => e.preventDefault()
    return (<Button.SUCCESS theme={ButtonTheme.ROUNDED} action={handleCheckout}>
        Checkout&nbsp; <Icon.CHEVRON_RIGHT />
    </Button.SUCCESS>)
}
const CartButtons = () => (
    <StyledCartButtons>
        <ShoppingButton />
        <CheckoutButton />
    </StyledCartButtons>)
const TrashButton = ({ remove }) => (
    <div>
        <Button.DANGER action={remove} size={ButtonSize.SMALL} classNames="float-right trash-button">
            <Icon.TRASH color="#dc3545" />
        </Button.DANGER>
    </div>)
const Subtotal = ({ total_cart, discountedOffer }) => {
    const { type, value, discountValue } = discountedOffer
    const isMinus = type === "minus", isSlice = type === "slice"
    return (<ul>
        <li><TextBold>Subtotal: &nbsp; &nbsp;{total_cart.toFixed(2)}€</TextBold></li>
        {isMinus || isSlice ? <li><TextBold>Discount: &nbsp; - {discountValue.toFixed(2)}€</TextBold></li> :
            <li><TextBold>Discount: ({value}%) &nbsp; - {discountValue.toFixed(2)}€</TextBold></li>}
    </ul>)
}
const Total = ({ total_cart, discountedOffer }) => {
    const { discountValue } = discountedOffer
    return (<ul><li><TextBold> Total: &nbsp; {total_cart - discountValue.toFixed(2)}€</TextBold></li></ul>)
}
const CartTotalRow = (props) => {
    return (<StyledCartRow>
        <Subtotal {...props} />
        <Divider />
        <Total {...props} />
    </StyledCartRow>)
};

export {
    CartTotalRow,
    TrashButton,
    CartButtons
}