export const cartActions = {
    ADD_TO_CART: "ADD_TO_CART",
    UPDATE_CART: "UPDATE_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    SAVE_CART: "SAVE_CART",
    SET_CART_TOTAL: "SET_CART_TOTAL",
    SET_DISCOUNT: "SET_DISCOUNT",
    CHECKOUT: "CHECKOUT",
};
export const addToCart = item => {
    const uid = () =>
        Math.random()
            .toString(34)
            .slice(2);
    return {
        type: cartActions.ADD_TO_CART,
        payload: { id: uid(), details: item, quantity: 1 }
    };
};
export const updateCart = (id, quantity) => {
    return {
        type: cartActions.UPDATE_CART,
        payload: { id: id, quantity: quantity }
    };
};
export const removeFromCart = id => {
    return {
        type: cartActions.REMOVE_FROM_CART,
        payload: { id: id }
    };
};
export const setTotalCart = () => {
    return {
        type: cartActions.SET_CART_TOTAL,
    };
};
export const setDiscount = offers => {
    return {
        type: cartActions.SET_DISCOUNT, 
        payload: { offers : offers }
    };
};
export const saveCart = items => {
    return {
        type: cartActions.SAVE_CART,
        payload: { items: items }
    };
};
export const checkout = () => {
    return {
        type: cartActions.CHECKOUT
    };
};
