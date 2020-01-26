import { actions } from "../../actions/shoppingCart";
import * as helpers from "../../../utils/helpers"

const {
    ADD_TO_CART,
    SAVE_CART,
    UPDATE_CART,
    REMOVE_FROM_CART,
    SET_CART_TOTAL,
    SET_DISCOUNT,
    CHECKOUT,
} = actions

const ITEMS_KEY = "items"
const initialState = {
    isConfirmed: false,
    total_cart: 0,
    discountedOffer: {},
    items: helpers.getLocalStorage(ITEMS_KEY)
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                isConfirmed: false,
                items: [...state.items, action.payload]
            };
        case UPDATE_CART:
            return {
                ...state,
                items: state.items.map(item => {
                    return item.id === action.payload.id ?
                        { ...item, quantity: action.payload.quantity } : item;
                })
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => {
                    return item.id !== action.payload.id;
                })
            };
        case SET_CART_TOTAL:
            return {
                ...state,
                total_cart: helpers.checkout(state.items)
            };
        case SET_DISCOUNT:
            return {
                ...state,
                isPending: false,
                discountedOffer: helpers.calculateBestOffer(state.total_cart, action.payload.offers)
            }
        case SAVE_CART:
            helpers.saveToLocalStorage(ITEMS_KEY, action.payload.items)
            return { ...state, items: action.payload.items };
        case CHECKOUT:
            helpers.saveToLocalStorage(ITEMS_KEY, [])
            return {
                total_cart: 0,
                discountedOffer: {},
                offers: [],
                items: [],
                isConfirmed: true
            }
        default:
            return state;
    }
};
export default shoppingCartReducer;
