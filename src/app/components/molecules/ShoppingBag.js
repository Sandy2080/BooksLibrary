import React from "react";
import { Link } from "react-router-dom";
import { StyledShoppingBag } from './styles'
import Icon, { IconSize } from '../atoms/icon'
import Badge, { BadgeTheme } from '../atoms/badge'

export const ShoppingBag = ({ items }) => (
         <StyledShoppingBag className="ml-auto">
           <Link to="/cart">
             <Icon.SHOPPING_BAG color="tomato" size={IconSize.XXXLARGE}/> 
           </Link>
          <Badge.INFO theme={BadgeTheme.PILL} customColor="#2980b9">{items.length > 0 && items.length}</Badge.INFO>
         </StyledShoppingBag>
);