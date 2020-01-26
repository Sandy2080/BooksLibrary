import { connect } from "react-redux";
import { fetchOffers } from "../../../api/fetchOffers";
import { checkout } from "../../../lib/actions/shoppingCart/cart"
import Cart from "../presentation/Cart";

const mapStateToProps = (state: any) => ({
  items: state.shoppingCartReducer.items, 
  isConfirmed: state.shoppingCartReducer.isConfirmed
});
const mapDispatchToProps = (dispatch: any) => ({
  getOffers: (items: any[]) => fetchOffers(items),
  checkout: () => dispatch(checkout())
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
