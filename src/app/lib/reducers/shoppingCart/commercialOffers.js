
import { actions } from "../../actions/shoppingCart/commercialOffers";
import * as helpers from "../../../utils/helpers"
const {
    FETCH_OFFERS_PENDING,
    FETCH_OFFERS_SUCCESS,
    FETCH_OFFERS_ERROR
} = actions;

const ITEMS_KEY = "items"
const initialState = {
    isPending: false,
    hasError: null,
    offers: [],
};

const commercialOffersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_OFFERS_PENDING:
            return {
                ...state,
                isPending: true
         };
        case FETCH_OFFERS_SUCCESS:
            return {
                ...state,
                offers: action.payload.offers
            };
        case FETCH_OFFERS_ERROR:
            return {
                ...state,
                isPending: false,
                hasError: action.payload.error
            };
        default:
            return state;
    }
};
export default commercialOffersReducer;
