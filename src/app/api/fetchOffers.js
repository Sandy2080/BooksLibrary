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
      store.dispatch(fetchOffersSuccess(res['offers']));
      store.dispatch(setTotalCart());
    })
    .then(() => store.dispatch(setDiscount()))
    .catch(error => {
      store.dispatch(fetchOffersError(error));
    });
}
