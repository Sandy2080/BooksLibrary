import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useWindowDimensions from '../../../utils/hooks/useWindowDimensions';
import { Link } from "react-router-dom";
import { saveCart } from "../../../lib/actions/shoppingCart";
import { ShoppingBag } from "../../molecules"
import { 
  Navbar, 
  NavbarPlacement,
  SubTitle, 
  Text 
} from "../../atoms" 

const TopNavbar =  (props) => {
  const { items } = useSelector(state => ({ ...state.shoppingCartReducer}));
  const dispatch = useDispatch();
  const { isMobile } = useWindowDimensions();
  const title = "La Bibliothèque d'Henri Potier"

  useEffect(() => {
    if (items.length > 0) { dispatch(saveCart(items)) } // saves to localstorage upon cart change and update
  }, [items, dispatch])
  return (
    <Navbar.LIGHT id="nav" placement={NavbarPlacement.FIXED_TOP} {...props}>
      <Link className="navbar-brand" to="/">
        {isMobile ?
          <Text.SEMIBOLD fontSize="20" className="title">{title}</Text.SEMIBOLD> :
          <SubTitle>{title}</SubTitle>}
      </Link>
      <ShoppingBag items={items} />
    </Navbar.LIGHT>
  );
};
export default TopNavbar;