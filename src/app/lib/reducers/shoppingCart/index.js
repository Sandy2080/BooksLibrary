import { actions } from "../../actions/shoppingCart";
const {
  ADD_TO_CART,
  SAVE_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  SET_CART_TOTAL, 
  SET_DISCOUNT,
  FETCH_OFFERS_PENDING,
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_ERROR
} = actions;

// move in another file
const calculateTotal = (items) => {
  const totals = items.map(item => {
    return item.quantity * item.details.price;
  });
   return totals.reduce((x, y) => x + y, 0);
};

const getBest = (subTotal, offers) => {
  let commercialOffers = [];

    offers.forEach(offer => {
      if (offer.type == "percentage") {
        commercialOffers.length > 0 &&
        commercialOffers[0].discount > offer.percentage(subTotal)
          ? commercialOffers.unshift({
              offer: offer,
              discount: offer.percentage(subTotal)
            })
          : commercialOffers.push({
              offer: offer,
              discount: offer.percentage(subTotal)
            });
      }

      if (offer.type == "minus") {
        commercialOffers.length > 0 &&
        commercialOffers[0].discount > offer.minus(subTotal)
          ? commercialOffers.unshift({
              offer: offer,
              discount: offer.minus(subTotal)
            })
          : commercialOffers.push({
              offer: offer,
              discount: offer.minus(subTotal)
            });
      }

      if (offer.type == "slice") {
        commercialOffers.length > 0 &&
        commercialOffers[0].discount > offer.slice(subTotal)
          ? commercialOffers.unshift({
              offer: offer,
              discount: offer.slice(subTotal)
            })
          : commercialOffers.push({
              offer: offer,
              discount: offer.slice(subTotal)
            });
      }
      commercialOffers = commercialOffers.filter(offer => offer.discount != 0)
      console.log(`offer discount ${commercialOffers[0].discount}`);
    });
  return commercialOffers[0];
};

//move in another file
const saveToLocalstorage = object => {
  localStorage.setItem("items", JSON.stringify(object));
};
const initialState = {
  total_cart: 0, 
  discountedOffer: {},
  offers: [],
  items:
    JSON.parse(localStorage.getItem("items")) == null ||
    JSON.parse(localStorage.getItem("items")) == undefined
      ? []
      : JSON.parse(localStorage.getItem("items"))
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {
        items: [...state.items, action.payload]
      });
    case UPDATE_CART:
      return Object.assign({}, state, {
        items: state.items.map(item => {
          return item.id === action.payload.id
            ? Object.assign({}, item, {
                quantity: action.payload.quantity
              }) : item;
        })
      });
    case REMOVE_FROM_CART:
      return Object.assign({}, state, {
        items: state.items.filter(item => {
          return item.id != action.payload.id;
        })
      });
    case SET_CART_TOTAL:
      return Object.assign({}, state, {
        total_cart: calculateTotal(state.items)
      });
    case SET_DISCOUNT:
      return Object.assign({}, state, {
        discountedOffer: getBest(state.total_cart, state.offers)
      });
    case SAVE_CART:
      saveToLocalstorage(action.payload.items);
      return Object.assign({}, state, { items: action.payload.items });
    case FETCH_OFFERS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case FETCH_OFFERS_SUCCESS:
      return {
        ...state,
        isPending: false,
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
export default shoppingCartReducer;
