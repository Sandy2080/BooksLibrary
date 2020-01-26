import {  fetchBooksPending, fetchBooksSuccess, fetchBooksError } from '../lib/actions/bookStore'
import { store } from "../lib/store";
import { Request, Endpoint } from "./service";
const { Book, Offer } = Endpoint;

export function fetchBooks() {
    store.dispatch(fetchBooksPending());
    let request = new Request(Book, []);
    request.get()
        .then(res => {
            store.dispatch(fetchBooksSuccess(res));
        })
        .catch(error => {
            store.dispatch(fetchBooksError(error));
    })  
}
