import { actions } from "../../actions/shoppingCart";
import * as helpers from "../../../utils/helpers"
const {
  ADD_TO_CART,
  SAVE_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  SET_CART_TOTAL, 
  SET_DISCOUNT,
  FETCH_OFFERS_PENDING,
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_ERROR
} = actions;

const ITEMS_KEY = "items"
const initialState = {
  total_cart: 0, 
  discountedOffer: {},
  offers: [],
  items: helpers.getLocalStorage(ITEMS_KEY)
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload]
        };
      case UPDATE_CART:
      return {
        ...state, 
        items: state.items.map(item => {
          return item.id === action.payload.id ?
          {...item, quantity: action.payload.quantity } : item;
        })
      };
    case REMOVE_FROM_CART:
      return {
          ...state,
        items: state.items.filter(item => {
          return item.id !== action.payload.id;
        })
      };
    case SET_CART_TOTAL:
      return {
        ...state,
        total_cart: helpers.checkout(state.items)};
    case SET_DISCOUNT:
          return {
            ...state,
            discountedOffer: helpers.calculateBestOffer(state.total_cart, state.offers)
          }
    case SAVE_CART:
      helpers.saveToLocalStorage(ITEMS_KEY, action.payload.items)
      return { ...state, items: action.payload.items };
    case FETCH_OFFERS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case FETCH_OFFERS_SUCCESS:
      return {
        ...state,
        isPending: false,
        offers: action.payload.offers
      };
    case FETCH_OFFERS_ERROR:
      return {
        ...state,
        isPending: false,
        hasError: action.payload.error
      };
    default:
      return state;
  }
};
export default shoppingCartReducer;
