import { connect } from "react-redux";
import { fetchOffers } from "../../../api/fetchOffers";
import { approveCart, resetCart } from "../../../lib/actions/shoppingCart"
import Cart from "../presentation/Cart";

const mapStateToProps = (state: any) => ({
  items: state.shoppingCartReducer.items, 
  cartStatus: state.shoppingCartReducer.cartStatus
});
const mapDispatchToProps = (dispatch: any) => ({
  getOffers: (items: any[]) => fetchOffers(items),
  approveCart: () => dispatch(approveCart()),
  reset: () => dispatch(resetCart()), 
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
