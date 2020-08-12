import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className=" mt-2 ml-sl-5 ml-md-auto text-capitalize- text-left">
            <Link to="/">
              <button
                className="site-btn text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Proceed to checkout
              </button>
            </Link>
            <Link to="/">
              <button
                className="site-btn sb-dark text-uppercase"
                type="button"
              >
                continue shopping
              </button>
            </Link>
            {/* <h5>
              <span className="text-title">subtotal :</span>
              <strong>₹ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>₹ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>₹ {cartTotal}</strong>
            </h5> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
