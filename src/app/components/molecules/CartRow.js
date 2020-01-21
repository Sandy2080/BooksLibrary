import React from "react";
import { ProductImage } from "../atoms/Image";
import { TextSmall } from "../atoms/Text"; 
import { useSelector, useDispatch } from "react-redux";
import { updateCart, removeFromCart} from "../../lib/actions/shoppingCartActions";

const Styles = {
  width5: "5%",
  width15: "15%",
  width30: "30%",
  width40: "40%",
  width50: "50%", 
  height: "60px"
};

export const CartRow = ({ item }) => {
  const { id, details, quantity } = item
  const { isbn, title, price } = details
  const dispatch = useDispatch();
  return (
    <tr style={{ height: Styles.height }}>
      <td>
        <ProductImage item={details} width="80" height="130" />
      </td>
      <td>
        {title} <br />
        <TextSmall>isbn: {isbn}</TextSmall>
      </td>
      <td>
        <strong>€{price}</strong>
      </td>
      <td>
        <input
          className="form-control input-sm"
          style={{ width: Styles.width50 }}
          max="100"
          min="1"
          name="size"
          step="1"
          type="number"
          defaultValue={quantity}
          onChange={e => dispatch(updateCart(id, e.target.value))}
        />
      </td>
      <td>
        <strong>€{(price * quantity).toFixed(2)}</strong>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-outline-danger btn-xs"
          onClick={() => dispatch(removeFromCart(id))}
        >
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  );
}