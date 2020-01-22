import React from "react";
import { Link } from "react-router-dom";
import { StyledShoppingBag } from './styles'
import Icon, { IconSize } from '../atoms/icon/index'

export const ShoppingBag = ({ items }) => (
         <StyledShoppingBag className="ml-auto">
           <Link to="/cart">
             <Icon.SHOPPING_BAG color="tomato" size={IconSize.XXXLARGE}/> 
           </Link>
           <span className="badge badge-pill badge-info">
             {items.length > 0 && items.length}
           </span>
         </StyledShoppingBag>
);