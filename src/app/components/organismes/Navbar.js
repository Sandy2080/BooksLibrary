import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveCart } from "../../lib/actions/shoppingCart";
import { ShoppingBag } from "../molecules/ShoppingBag"
import Navbar, { NavbarPlacement } from "../atoms/nav"
import { SubTitle } from "../atoms/text" 

export const TopNavbar =  (props) => {
  const { items } = useSelector(state => ({ ...state.shoppingCartReducer}));
  const dispatch = useDispatch();
  const title = "La Bibliothèque d'Henri Potier"

  useEffect(() => {
    if (items.length > 0) { dispatch(saveCart(items)) } // saves to localstorage upon cart change and update
  }, [items, dispatch])
  return (
    <Navbar.LIGHT id="nav" placement={NavbarPlacement.FIXED_TOP} {...props}>
      <Link className="navbar-brand" to="/"><SubTitle>{title}</SubTitle></Link>
        <ShoppingBag items={items} />
    </Navbar.LIGHT>
  );
};