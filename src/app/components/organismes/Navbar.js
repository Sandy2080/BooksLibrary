import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveCart } from "../../lib/actions/shoppingCart";
import { ShoppingBag } from "../molecules/ShoppingBag"
import { TitleBold } from "../atoms/styles" 

export const Navbar =  () => {
  const { items } = useSelector(state => ({ ...state.shoppingCartReducer}));
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length) { dispatch(saveCart(items)) } // saves to localstorage upon cart change and update
  }, [items, dispatch])
  
  const Title = "La Bibliothèque d'Henri Potier"
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/"><TitleBold>{Title}</TitleBold></Link>
      <ShoppingBag items={items} />
    </nav>
  );
};