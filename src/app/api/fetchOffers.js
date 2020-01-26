import {
  fetchOffersPending,
  fetchOffersSuccess,
  fetchOffersError,
  setTotalCart,
  setDiscount
} from "../lib/actions/shoppingCart";
import { store } from "../lib/store";
import { Request, Endpoint } from "./service";
const { Offer } = Endpoint

export function fetchOffers(items) {
  store.dispatch(fetchOffersPending());
  let isbns = items.map(item => item.details.isbn);
  let request = new Request(Offer, isbns)
  request.get()
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

