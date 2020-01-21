import { createStore, compose, applyMiddleware } from "redux";
import bookstoreApp from "./reducers/rootReducer";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(bookstoreApp, composeEnhancer(applyMiddleware(thunk)));  