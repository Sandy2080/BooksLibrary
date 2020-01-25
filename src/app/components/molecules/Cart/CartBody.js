import React, { Fragment } from "react";
import { CartRow } from "../../molecules/Cart/CartRow";
import Divider from "../../atoms/divider"
import { StyledCard } from "../Card/styles";

export const CartBody = ({ items }) => {
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
