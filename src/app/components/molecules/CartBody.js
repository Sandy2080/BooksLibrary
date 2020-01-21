import React from "react";
import { CartRow } from "./CartRow";

const Styles = {
  width5: "5%",
  width10: "10%",
  width15: "15%",
  width30: "30%",
  width40: "40%",
  width50: "50%"
};
export const CartBody = ({ items }) => (
  <div className="card-body">
    <table>
      <thead>
        <tr>
          <th style={{ width: Styles.width10 }}></th>
          <th style={{ width: Styles.width30 }}>Product</th>
          <th style={{ width: Styles.width5 }}>Price</th>
          <th style={{ width: Styles.width15 }}>Quantity</th>
          <th style={{ width: Styles.width10 }}>Subtotal</th>
          <th style={{ width: Styles.width5 }}>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          return <CartRow key={index} item={item}/>;
        })}
      </tbody>
    </table>
  </div>
);