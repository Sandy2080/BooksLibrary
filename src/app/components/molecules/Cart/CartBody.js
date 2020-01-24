import React, { Fragment } from "react";
import { CartRow } from "../../molecules/Cart/CartRow";
import Divider from "../../atoms/divider"
import { TitleBold } from "../../atoms/text/styles";
import { StyledCard } from "../Card/styles";

const CartEmpty = () => (<TitleBold>Your cart is empty</TitleBold>)
const CartBody = ({ items }) => {
    return (<StyledCard className="card-body">
                {items.map((item, index) => {
                    return (
                    <Fragment>
                        <CartRow key={index} item={item} />
                        <Divider spacing="20" />
                    </Fragment>
                    )
                })}
            </StyledCard>)
}
export const CartComponent = ({ items }) => {
    const isEmpty = items.length == 0
    if (isEmpty) { return <CartEmpty /> }
    return <CartBody items={items} />
}