import React from "react";
import { Link } from "react-router-dom";
import { StyledCartRow } from './styles'
import { Text } from "../../atoms/text"
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
                <li><Text.BOLD>Subtotal: &nbsp; &nbsp;{total_cart.toFixed(2)}€</Text.BOLD></li>
                <li>
                    {isMinus || isSlice ?
                    <Text.BOLD>Discount: &nbsp; - {discountValue.toFixed(2)}€</Text.BOLD> :
                    <Text.BOLD>Discount: ({value}%)  &nbsp; -{discountValue}€</Text.BOLD>}
                </li>
            </ul>
            <Divider />
            <ul><li><Text.BOLD> Total: &nbsp; {total.toFixed(2)}€</Text.BOLD></li></ul>
        </StyledCartRow>
    );
}

export {
    CartTotalRow, 
    TrashButton,
    CartButtons
}