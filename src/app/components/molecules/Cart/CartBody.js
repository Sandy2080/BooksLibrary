import React, { Fragment } from "react";
import { CartRow } from "./CartRow";
import Divider from "../../atoms/divider"

export const CartBody = ({ items }) => (
  <div className="card-body">
    {items.map((item, index) => {
      return(
        <Fragment>
          <CartRow key={index} item={item} />
          <Divider spacing="20"/>
        </Fragment>
      )
    })}
  </div>
);