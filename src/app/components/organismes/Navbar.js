import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveCart } from "../../lib/actions/shoppingCart";

export const Navbar =  ({ showFiltered }) => {
  const { items } = useSelector(state => ({ ...state.shoppingCartReducer}));
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length) { dispatch(saveCart(items)) } // saves to localstorage upon cart change and update
  }, [items])
  
  const Title = "La Bibliothèque d'Henri Potier"
  return (
    <nav className="navbar navbar-light bg-light">
      <Link a className="navbar-brand" to="/">
        {Title}
      </Link>
     
      <div className="ml-auto">
        <Link to="/cart">
          <i className="fas fa-2x fa-shopping-cart"></i>{" "}
        </Link>
        <span className="badge badge-pill badge-info">
          {items.length > 0 && items.length}
        </span>
      </div>
    </nav>
  );
};