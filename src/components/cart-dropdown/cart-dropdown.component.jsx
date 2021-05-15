import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const Cart = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {console.log("varukorgen:", cartItems)}
      <CustomButton>Go to checkout</CustomButton>
    </div>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});

export default connect(mapStateToProps)(Cart);
