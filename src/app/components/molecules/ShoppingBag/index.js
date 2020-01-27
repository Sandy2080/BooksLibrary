import React from "react";
import { Link } from "react-router-dom";
import { StyledShoppingBag } from './styles'
import { calculateTotal } from "../../../utils/helpers"
import { 
  Badge, 
  BadgeTheme,
  Icon, 
  IconSize 
} from '../../atoms/'


const ShoppingBag = ({ items }) =>  {
  const cartLength = items.map(item => item.quantity).reduce(calculateTotal, 0);
  return (
    <StyledShoppingBag className="ml-auto">
      <Link to="/cart">
        <Icon.SHOPPING_BAG color="#7f8c8d" size={IconSize.XXXLARGE} />
      </Link>
      <Badge.INFO theme={BadgeTheme.PILL} customColor="#2980b9">
        {cartLength > 0 && cartLength}
      </Badge.INFO>
    </StyledShoppingBag>
  );
}
  
export default ShoppingBag;