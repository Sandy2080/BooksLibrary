import {
  fetchOffersPending,
  fetchOffersSuccess,
  fetchOffersError,
  setTotalCart,
  setDiscount
} from "../lib/actions/shoppingCart";
import { get, Endpoint } from "./service";
import { store } from "../lib/store";

export function fetchOffers(items) {
  let isbns = items.map(item => item.details.isbn);
  store.dispatch(fetchOffersPending());
  get(Endpoint.Offer, isbns)
    .then(res => {
      const offers = res['offers']
      store.dispatch(fetchOffersSuccess(offers))
    })
    .then(() => {
      store.dispatch(setTotalCart());
      store.dispatch(setDiscount())
    })
    .catch(error => dispatch => dispatch(fetchOffersError(error)));
  }

