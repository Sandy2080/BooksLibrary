import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCart, checkout } from "../../../lib/actions/shoppingCart";
import { Text } from "../../atoms/text"
import Button, { ButtonTheme, ButtonSize } from "../../atoms/button";
import Icon from "../../atoms/icon"
import Input, { InputSize } from "../../atoms/input"
import Divider from "../../atoms/divider";
import { StyledCartRow } from './styles'
import { StyledCartButtons } from "./styles"

const ShoppingButton = () => (
    <Link to="/"> 
        <Button.INFO theme={ButtonTheme.ROUNDED}> 
            <Icon.CHEVRON_LEFT /> &nbsp; Continue Shopping 
        </Button.INFO> 
    </Link>
); 
const CheckoutButton = () => { 
    const dispatch = useDispatch()
    const handleCheckout = e => {
        dispatch(checkout())
        e.preventDefault() 
    }
    return (<Button.SUCCESS theme={ButtonTheme.ROUNDED} action={handleCheckout}> 
                Checkout&nbsp; <Icon.CHEVRON_RIGHT /> 
            </Button.SUCCESS>) 
}
const CartButtons = () => 
    (<StyledCartButtons> 
        <ShoppingButton /> 
        <CheckoutButton /> 
    </StyledCartButtons>)

const TrashButton = ({ remove }) => 
    (<div>
        <Button.DANGER 
            customColor="tomato"
            action={remove} 
            size={ButtonSize.SMALL} 
            classNames="float-right trash-button">
            <Icon.TRASH />
        </Button.DANGER>
    </div>)

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
const QuantityStepper = ({ id, quantity }) => {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(quantity)
    const update = () => dispatch(updateCart(id, qty))
    const increment = () => qty >= 2 && setQty(qty - 1)
    const decrement = () => setQty(qty + 1)
    
    useEffect(() => {
        update()
    }, [qty])
    return (
    <div className="stepper-buttons">
        <Button.LIGHT action={increment}>-</Button.LIGHT>
            <span className="btn btn-ligth">{qty}</span>
        <Button.LIGHT action={decrement}>+</Button.LIGHT>
    </div>)
}
const CartTotal = ({ total_cart, discountedOffer }) => {
    const { type, value, discountValue } = discountedOffer
    const isMinus = type === "minus", isSlice = type === "slice"
    const total = total_cart - discountValue
    return (
        <StyledCartRow>
            <ul>
                <li><Text.BOLD>Subtotal: &nbsp; &nbsp;{total_cart.toFixed(2)}€</Text.BOLD></li>
                <li>
                    {isMinus || isSlice ?
                    <Text.BOLD color="tomato">Discount: &nbsp; - {discountValue.toFixed(2)}€</Text.BOLD> :
                    <Text.BOLD color="tomato">Discount: ({value}%)  &nbsp; -{discountValue}€</Text.BOLD>}
                </li>
            </ul>
            <Divider />
            <ul><li><Text.SUPERBOLD> Total: &nbsp; {total.toFixed(2)}€</Text.SUPERBOLD></li></ul>
        </StyledCartRow>);
}
export {
    CartTotal, 
    TrashButton,
    CartButtons,    
    QuantityInput, 
    QuantityStepper
}