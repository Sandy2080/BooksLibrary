import { connect } from "react-redux";
import { Book } from '../../../models/Book'
import { updateCart, removeFromCart } from "../../../lib/actions/shoppingCart"
import { fetchOffers } from "../../../api/fetchOffers";
import Cart from "../presentation/Cart";

const mapStateToProps = (state: any) => ({
  items: state.shoppingCartReducer.items
});
const mapDispatchToProps = (dispatch: any) => ({
  updateCart: (item: Book, quantity: number) =>
  dispatch(updateCart(item, quantity)),
  removeFromCart: (item: Book) => dispatch(removeFromCart(item)),
  getOffers: (items: any[]) => fetchOffers(items),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
