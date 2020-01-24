import React from "react";
import { Link } from "react-router-dom";
import { StyledCartRow } from './styles'
import { TextBold } from "../../atoms/text/Text"
import Button, { ButtonTheme, ButtonSize } from "../../atoms/button";
import Icon from "../../atoms/icon"
import Divider from "../../atoms/divider";
import { StyledCartButtons } from "./styles"

const ShoppingButton = () => (
    <Link to="/"> 
        <Button.INFO theme={ButtonTheme.ROUNDED}> 
            <Icon.CHEVRON_LEFT /> &nbsp; Continue Shopping 
        </Button.INFO> 
    </Link>
); 

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
    </StyledCartButtons>
)
const TrashButton = ({ remove }) => (
    <div>
        <Button.DANGER action={remove} size={ButtonSize.SMALL} classNames="float-right trash-button">
            <Icon.TRASH color="#dc3545" />
        </Button.DANGER>
    </div>
)

const CartTotalRow = ({ total_cart, discountedOffer }) => {
    const { type, value, discountValue } = discountedOffer
    const isMinus = type === "minus", isSlice = type === "slice"
    const total = total_cart - discountValue
    return (
        <StyledCartRow>
            <ul>
                <li><TextBold>Subtotal: &nbsp; &nbsp;{total_cart.toFixed(2)}€</TextBold></li>
                <li>
                    {isMinus || isSlice ?
                    <TextBold>Discount: &nbsp; - {discountValue.toFixed(2)}€</TextBold> :
                    <TextBold>Discount: ({value}%)  &nbsp; -{discountValue}€</TextBold>}
                </li>
            </ul>
            <Divider />
            <ul><li><TextBold> Total: &nbsp; {total.toFixed(2)}€</TextBold></li></ul>
        </StyledCartRow>
    );
}

export {
    CartTotalRow, 
    TrashButton,
    CartButtons
}