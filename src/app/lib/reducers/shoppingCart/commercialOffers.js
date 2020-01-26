import { actions } from "../../actions/shoppingCart/commercialOffers";
const {
    FETCH_OFFERS_PENDING,
    FETCH_OFFERS_SUCCESS,
    FETCH_OFFERS_ERROR
} = actions;
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
