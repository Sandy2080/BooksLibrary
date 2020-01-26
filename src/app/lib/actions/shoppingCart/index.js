export const actions = {
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
        type: actions.ADD_TO_CART,
        payload: { id: uid(), details: item, quantity: 1 }
    };
};
export const updateCart = (id, quantity) => {
    return {
        type: actions.UPDATE_CART,
        payload: { id: id, quantity: quantity }
    };
};
export const removeFromCart = id => {
    return {
        type: actions.REMOVE_FROM_CART,
        payload: { id: id }
    };
};
export const setTotalCart = () => {
    return {
        type: actions.SET_CART_TOTAL,
    };
};
export const setDiscount = offers => {
    console.log(`OFFERS ${offers}`)
    debugger;
    return {
        type: actions.SET_DISCOUNT, 
        payload: { offers : offers }
    };
};
export const saveCart = items => {
    return {
        type: actions.SAVE_CART,
        payload: { items: items }
    };
};
export const checkout = () => {
    return {
        type: actions.CHECKOUT
    };
};
