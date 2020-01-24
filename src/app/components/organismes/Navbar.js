import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveCart } from "../../lib/actions/shoppingCart";
import { ShoppingBag } from "../molecules/ShoppingBag"
import { TitleBold } from "../atoms/text/styles" 
import Navbar, { NavbarPlacement } from "../atoms/nav"

export const TopNavbar =  (props) => {
  const { items } = useSelector(state => ({ ...state.shoppingCartReducer}));
  const dispatch = useDispatch();
  const Title = "La Bibliothèque d'Henri Potier"

  useEffect(() => {
    if (items.length) { dispatch(saveCart(items)) } // saves to localstorage upon cart change and update
  }, [items, dispatch])

  return (
    <Navbar.LIGHT id="nav" {...props}>
        <Link className="navbar-brand" to="/"><TitleBold>{Title}</TitleBold></Link>
        <ShoppingBag items={items} />
    </Navbar.LIGHT>
  );
};