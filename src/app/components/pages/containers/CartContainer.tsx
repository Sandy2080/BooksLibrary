import { connect } from "react-redux";
import { Book } from '../../../models/Book'
import { fetchOffers } from "../../../api/fetchOffers";
import Cart from "../presentation/Cart";

const mapStateToProps = (state: any) => ({
  items: state.shoppingCartReducer.items
});
const mapDispatchToProps = (dispatch: any) => ({
  getOffers: (items: any[]) => fetchOffers(items),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
