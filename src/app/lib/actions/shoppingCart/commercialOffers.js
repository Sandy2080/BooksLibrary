import { Offer } from '../../../models/Offer';
import { Request, Endpoint } from '../../../service';
import { setTotalCart, setDiscount } from '../shoppingCart/index';
export const actions = {
  FETCH_OFFERS_PENDING: 'FETCH_OFFERS_PENDING',
  FETCH_OFFERS_SUCCESS: 'FETCH_OFFERS_SUCCESS',
  FETCH_OFFERS_ERROR: 'FETCH_OFFERS_ERROR',
};
export function fetchOffersPending() {
  return {
    type: actions.FETCH_OFFERS_PENDING,
  };
}
export function fetchOffersSuccess(json) {
  return {
    type: actions.FETCH_OFFERS_SUCCESS,
    payload: { offers: json.map(obj => new Offer(obj)) },
  };
}
export function fetchOffersError(error) {
  return {
    type: actions.FETCH_OFFERS_ERROR,
    payload: { error: error },
  };
}

export function fetchOffers(items) {
  return dispatch => {
    dispatch(fetchOffersPending());
    let isbns = items.map(item => item.details.isbn);
    let request = new Request(Endpoint.Offer, isbns);
    request
      .get()
      .then(res => {
        const offers = res.offers;
        dispatch(fetchOffersSuccess(offers));
        return offers;
      })
      .then(offers => {
        dispatch(setTotalCart());
        dispatch(setDiscount(offers));
      })
      .catch(error => dispatch(fetchOffersError(error)));
  };
}
