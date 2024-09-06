import React, { useContext } from 'react';
import './CartItems.css';
import remove_icon from '../assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
  const { all_product, cartItems, removefromcart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitem-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>₹{e.new_price * 10 * cartItems[e.id]}</p>
                <img className='remove-icon' src={remove_icon} onClick={() => removefromcart(e.id)} alt="" />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount() || "0"}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping</p>
              <p>₹{getTotalCartAmount() > 0 ? "40" : "0"}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount() > 0 ? getTotalCartAmount() + 40 : "0"}</h3>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
        <div className="cartitem-promocode">
          <p>If you have a promo code, Enter it Here</p>
          <div className="cartitems-promo-input">
            <input type="text" placeholder='Promo code' />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;