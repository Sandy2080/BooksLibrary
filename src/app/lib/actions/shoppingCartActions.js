import { Offer } from "../../models/Offer";
export const actions = {
         ADD_TO_CART: "ADD_TO_CART",
         UPDATE_CART: "UPDATE_CART",
         REMOVE_FROM_CART: "REMOVE_FROM_CART",
         SAVE_CART: "SAVE_CART",
         SET_CART_TOTAL: "SET_CART_TOTAL",
         SET_DISCOUNT: "SET_DISCOUNT",
         FETCH_OFFERS_PENDING: "FETCH_OFFERS_PENDING",
         FETCH_OFFERS_SUCCESS: "FETCH_OFFERS_SUCCESS",
         FETCH_OFFERS_ERROR: "FETCH_OFFERS_ERROR"
       };

export const addToCart = item => {
  const uid = () =>
    Math.random()
      .toString(34)
      .slice(2);
  return {
    type: actions.ADD_TO_CART,
    payload: { id: uid(), details: item, quantity: 1 }
  };
};
export const updateCart = (id, quantity) => {
  return {
    type: actions.UPDATE_CART,
    payload: { id: id, quantity: quantity }
  };
};
export const removeFromCart = id => {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: { id: id }
  };
};
export const setTotalCart = () => {
  return {
    type: actions.SET_CART_TOTAL,
  };
};
export const setDiscount = () => {
  return {
    type: actions.SET_DISCOUNT
  };
};
export const saveCart = items => {
  return {
    type: actions.SAVE_CART,
    payload: { items: items }
  };
};

export function fetchOffersPending() {
  return {
    type: actions.FETCH_OFFERS_PENDING
  };
}
export function fetchOffersSuccess(json) {
  return {
    type: actions.FETCH_OFFERS_SUCCESS,
    payload: { offers: json.map(obj => new Offer(obj)) }
  };
}
export function fetchOffersError(error) {
  return {
    type: actions.FETCH_OFFERS_ERROR,
    payload: { error: error }
  };
}

