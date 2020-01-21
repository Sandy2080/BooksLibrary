import { combineReducers } from "redux";
import bookstoreReducer from "./bookStore";
import visibilityFilterReducer from "./visibilityFilter";
import shoppingCartReducer from "./shoppingCart";

const bookstoreApp = combineReducers({
  bookstoreReducer,
  visibilityFilterReducer,
  shoppingCartReducer
});

export default bookstoreApp;

