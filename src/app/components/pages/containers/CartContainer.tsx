import { connect } from "react-redux";
import { fetchOffers } from "../../../api/fetchOffers"; 
import { approveCart, cancelCheckout, resetCart } from "../../../lib/actions/shoppingCart"
import Cart from "../presentation/Cart";

const mapStateToProps = (state: any) => ({
  items: state.shoppingCartReducer.items, 
  status: state.shoppingCartReducer.cartStatus
});
const mapDispatchToProps = (dispatch: any) => ({
  getOffers: (items: any[]) => fetchOffers(items),
  approveCart: () => dispatch(approveCart()),
  cancelCheckout: () => dispatch(cancelCheckout()),
  reset: () => dispatch(resetCart()), 
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
