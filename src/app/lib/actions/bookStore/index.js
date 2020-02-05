import { Book } from '../../../models/Book';
import { Request, Endpoint } from '../../../service';

export const actions = {
  FETCH_BOOKS_PENDING: 'FETCH_BOOKS_PENDING',
  FETCH_BOOKS_SUCCESS: 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_ERROR: 'FETCH_BOOKS_ERROR',
};
export function fetchBooksPending() {
  return {
    type: actions.FETCH_BOOKS_PENDING,
  };
}
export function fetchBooksSuccess(json) {
  return {
    type: actions.FETCH_BOOKS_SUCCESS,
    payload: { books: json.map(obj => new Book(obj)) },
  };
}
export function fetchBooksError(error) {
  return {
    type: actions.FETCH_BOOKS_ERROR,
    payload: { error: error },
  };
}

export function fetchBooks() {
  return dispatch => {
    dispatch(fetchBooksPending());
    let request = new Request(Endpoint.Book, []);
    request
      .get()
      .then(res => {
        dispatch(fetchBooksSuccess(res));
      })
      .catch(error => {
        dispatch(fetchBooksError(error));
      });
  };
}
