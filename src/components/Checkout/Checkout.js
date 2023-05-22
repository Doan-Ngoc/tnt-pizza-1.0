import React from 'react'
import './Checkout.css'
const Checkout = ({cart}) => {

    const getTotalPrice = (cart) => {
        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
          const cartItem = cart[i];
          totalPrice += cartItem.price * cartItem.quantity;
        }
    
        return totalPrice;
      };
      const totalPrice = getTotalPrice(cart);
  return (
    <div>
  <div className="title-checkout">
    <p>HOME/</p>
    <span>CHECKOUT</span>
  </div>
  <div className="billing-detail">
    <h2>Billing details</h2>
    <div className="input-name">
      <span htmlFor="fullname">Full Name</span><span style={{color: '#D6763C'}}>*</span>
      <div><input type="text" id="fullname" /></div>
    </div>
    <div className="input-address">
      <span htmlFor="address">Street address</span><span style={{color: '#D6763C'}}>*</span>
      <div><input type="text" id="address" /></div>
    </div>
    <div className="input-city">
      <span htmlFor="towncity">Town / City</span><span style={{color: '#D6763C'}}>*</span>
      <div><input type="text" id="towncity" /></div>
    </div>
    <div className="input-phone">
      <span htmlFor="phone">Phone</span><span style={{color: '#D6763C'}}>*</span>
      <div><input type="text" id="phone" /></div>
    </div>
    <div className="input-mail">
      <span htmlFor="mail">Email</span><span style={{color: '#D6763C'}}>*</span>
      <div><input type="text" id="mail" /></div>
    </div>
  </div>
  <div className="order">
    <h2>Your order</h2>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
                  <td>Plain White Shirt</td>
                  <td>$59.00</td>
              </tr> */}
        <tr className="subtotal">
          <td>Subtotal</td>
          <td className="subtotal-price">{totalPrice} đ</td>
        </tr>
        <tr className="total">
          <td />
          <td className="total-price">{totalPrice} đ</td>
        </tr>
      </tbody>
    </table>
    <div className="place-order">
      <p className="content-place-order">Cash on delivery. Please contact us if you require assistance or wish to
        make alternate arrangements.</p>
      <button>PLACE ORDER</button>
    </div>
  </div>
</div>

  )
}

export default Checkout