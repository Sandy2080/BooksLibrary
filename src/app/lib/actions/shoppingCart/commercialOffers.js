import { Offer } from "../../../models/Offer";
export const actions = {
    FETCH_OFFERS_PENDING: "FETCH_OFFERS_PENDING",
    FETCH_OFFERS_SUCCESS: "FETCH_OFFERS_SUCCESS",
    FETCH_OFFERS_ERROR: "FETCH_OFFERS_ERROR"
};
export function fetchOffersPending() {
    return {
        type: actions.FETCH_OFFERS_PENDING
    };
}
export function fetchOffersSuccess(json) {
    return {
        type: actions.FETCH_OFFERS_SUCCESS,
        payload: { offers: json.map(obj => new Offer(obj)) }
    };
}
export function fetchOffersError(error) {
    return {
        type: actions.FETCH_OFFERS_ERROR,
        payload: { error: error }
    };
}