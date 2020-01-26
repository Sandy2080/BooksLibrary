import React from "react";
import { Link } from "react-router-dom";
import { StyledShoppingBag } from './styles'
import { 
  Badge, 
  BadgeTheme,
  Icon, 
  IconSize 
} from '../../atoms/'

const ShoppingBag = ({ items }) => (
    <StyledShoppingBag className="ml-auto">
    <Link to="/cart"><Icon.SHOPPING_BAG color="#7f8c8d" size={IconSize.XXXLARGE}/></Link>
      <Badge.INFO theme={BadgeTheme.PILL} customColor="#2980b9">{items.length > 0 && items.length}</Badge.INFO>
    </StyledShoppingBag>
);
export default ShoppingBag;