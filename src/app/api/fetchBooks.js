import {  fetchBooksPending, fetchBooksSuccess, fetchBooksError } from '../lib/actions/bookstoreActions'
import { get, Endpoint } from './service'
import { store } from "../lib/store"

export function fetchBooks() {
    store.dispatch(fetchBooksPending());
    get(Endpoint.Book, [])
        .then(res => {
            store.dispatch(fetchBooksSuccess(res));
        })
        .catch(error => {
            store.dispatch(fetchBooksError(error));
    })  
}
