import { Book } from "../../../models/Book";
export const actions = {
    FETCH_BOOKS_PENDING: "FETCH_BOOKS_PENDING",
    FETCH_BOOKS_SUCCESS: "FETCH_BOOKS_SUCCESS",
    FETCH_BOOKS_ERROR: "FETCH_BOOKS_ERROR",
};
export function fetchBooksPending() {
  return {
    type: actions.FETCH_BOOKS_PENDING
  };
}
export function fetchBooksSuccess(json) {
  return {
    type: actions.FETCH_BOOKS_SUCCESS,
    payload: { books: json.map((obj) => new Book(obj)) }
  };
}
export function fetchBooksError(error) {
  return {
    type: actions.FETCH_BOOKS_ERROR,
    payload: { error: error }
  };
}


