import { store } from '../lib/store';
import { Request, Endpoint } from './service';
import { setTotalCart, setDiscount } from '../lib/actions/shoppingCart';
import {
  fetchOffersPending,
  fetchOffersSuccess,
  fetchOffersError,
} from '../lib/actions/shoppingCart/commercialOffers';

const { Offer } = Endpoint;

export function fetchOffers(items) {
  store.dispatch(fetchOffersPending());
  let isbns = items.map(item => item.details.isbn);
  let request = new Request(Offer, isbns);
  request
    .get()
    .then(res => {
      const offers = res['offers'];
      store.dispatch(fetchOffersSuccess(offers));
      return offers;
    })
    .then(offers => {
      store.dispatch(setTotalCart());
      store.dispatch(setDiscount(offers));
    })
    .catch(error => dispatch => dispatch(fetchOffersError(error)));
}
