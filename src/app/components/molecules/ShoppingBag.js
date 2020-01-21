import React from "react";
import { Link } from "react-router-dom";
import { StyledShoppingBag } from './styles'

export const ShoppingBag = ({ items }) => (
    <StyledShoppingBag  className="ml-auto">
        <Link to="/cart">
            <i className="fas fa-3x fa-shopping-bag grey"></i>{" "}
        </Link>
        <span className="badge badge-pill badge-info">
            {items.length > 0 && items.length}
        </span>
    </ StyledShoppingBag>
)