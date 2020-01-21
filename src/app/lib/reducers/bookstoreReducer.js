import { actions } from "../actions/bookstoreActions";
const {
  FETCH_BOOKS_PENDING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} = actions;

const initialState = {
  isPending: false,
  books: [],
  hasError: null
};

export default function bookstoreReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_BOOKS_PENDING:
        return {
          ...state,
          isPending: true
        };
      case FETCH_BOOKS_SUCCESS:
        return {
          ...state,
          isPending: false,
          books: action.payload.books
        };
      case FETCH_BOOKS_ERROR:
        return {
          ...state,
          isPending: false,
          hasError: action.payload.error
        };
      default:
        return state;
    }
  }
export const getBooks = state => state.books;
export const getOffers = state => state.offers;
