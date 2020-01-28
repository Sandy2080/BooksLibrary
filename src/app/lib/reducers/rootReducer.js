import { combineReducers } from 'redux';
import bookstoreReducer from './bookStore';
import visibilityFilterReducer from './visibilityFilter';
import shoppingCartReducer from './shoppingCart';
import commercialOffersReducer from './shoppingCart/commercialOffers';

const bookstoreApp = combineReducers({
  bookstoreReducer,
  visibilityFilterReducer,
  shoppingCartReducer,
  commercialOffersReducer,
});

export default bookstoreApp;
