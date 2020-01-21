import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { TextTruncate } from "../atoms/Text";
import { addToCart } from "../../lib/actions/shoppingCartActions";

const AddToCart = ({ item, children }) => {
  const dispatch = useDispatch()
  return (<button className="btn btn-info btn-sm float-right" onClick={() => dispatch(addToCart(item))}>{children}</button>);
}
export const CardBody = ({ item }) => (
  <Fragment>
    <TextTruncate>{item.synopsis}</TextTruncate>
    <AddToCart item={item}>Add to Cart</AddToCart>
  </Fragment>
);