import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const cart = props.cart;
  // console.log(cart);
  const total = cart.reduce((total, prod) => total + prod.price, 0);
  // let total = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   const product = cart[i];
  //   total = total + product.price;
  // }

  return (
    <div>
      <h2>Invoice Details</h2>
      <h5>Items Enrol: {cart.length}</h5>
      <p>Grand Total: $ {total}</p>
      <button>Proceed</button>
    </div>
  );
};

export default Cart;
