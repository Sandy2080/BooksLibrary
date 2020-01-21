import { combineReducers } from "redux";
import bookstoreReducer from "./bookstoreReducer";
import visibilityFilterReducer from "./visibilityFilterReducer";
import shoppingCartReducer from "./shoppingCartReducer";

const bookstoreApp = combineReducers({
  bookstoreReducer,
  visibilityFilterReducer,
  shoppingCartReducer
});

export default bookstoreApp;

