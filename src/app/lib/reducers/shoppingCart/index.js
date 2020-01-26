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
    CANCEL_CHECKOUT,
    APPROVE_CART,
    RESET_CART
} = actions
export const cartStatus = {
    PENDING: "PENDING",
    COMPLETE: "COMPLETE", 
    APPROVED: "APPROVED", 
    EMPTY: "EMPTY"
};
const ITEMS_KEY = "items"
const items = helpers.getLocalStorage(ITEMS_KEY)
const isEmpty = items.length < 0

const initialState = {
    cartStatus: isEmpty ? cartStatus.EMPTY : cartStatus.PENDING,
    total_cart: 0,
    discountedOffer: {},
    items: items
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartStatus: cartStatus.PENDING,
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
            return {
                ...state, 
                cartStatus: cartStatus.COMPLETE
            }
        case CANCEL_CHECKOUT:
            return {
                ...state,
                cartStatus: cartStatus.PENDING
            }
        case APPROVE_CART:
            return {
                ...state,
                cartStatus: cartStatus.APPROVED
            }
        case RESET_CART:
            helpers.saveToLocalStorage(ITEMS_KEY, [])
            return {
                ...state,
                cartStatus: cartStatus.EMPTY,
                total_cart: 0,
                discountedOffer: {},
                items: [],
            }
        default:    
            return state;
    }
};
export default shoppingCartReducer;
