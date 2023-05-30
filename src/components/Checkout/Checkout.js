import React from 'react'
import './Checkout.css'
import { useLayoutEffect } from 'react';
const Checkout = ({ cart }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Scrolls the page to the top
  }, []);
  const getTotalPrice = (cart) => {

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      const cartItem = cart[i];
      totalPrice += cartItem.price * cartItem.quantity;
    }

    return totalPrice;
  };
  const totalPrice = getTotalPrice(cart);

  const cartBodyElements = cart.map((cartItem, index) => {
    const { title, price, id, quantity } = cartItem;
    return (
      <tr key={id}>
        <td>{title}</td>
        <td className="subtotal-price"><span style={{ width: "20px" }}>x{quantity} </span>   <span style={{ marginLeft: "50px" }}>{price}</span></td>
      </tr>
    )
  })
  return (
    <div className='checkout container'>
      <div className="billing-detail w-50 m-auto">
        <h2 className='mb-4 text-center'>Thông tin đơn hàng</h2>
        <div style={{ backgroundColor: "var(--background-color-1", padding: 30, borderRadius: '20px' }}>
          <div className="input-name">
            <span htmlFor="fullname">Tên của bạn</span><span style={{ color: '#D6763C' }}>*</span>
            <div><input type="text" id="fullname" /></div>
          </div>
          <div className="input-address">
            <span htmlFor="address">Địa chỉ giao hàng</span><span style={{ color: '#D6763C' }}>*</span>
            <div><input type="text" id="address" /></div>
          </div>
          <div className="input-phone">
            <span htmlFor="phone">Số điện thoại</span><span style={{ color: '#D6763C' }}>*</span>
            <div><input type="text" id="phone" /></div>
          </div>
          <div className="input-mail">
            <span htmlFor="mail">Địa chỉ email</span><span style={{ color: '#D6763C' }}>*</span>
            <div><input type="text" id="mail" /></div>
          </div>
          <div className='voucher w-100 d-flex justify-content-between align-items-ends'>
            <div>Mã giảm giá</div>
            <div><input style={{ padding: " 0px 10px " }} type='text' /></div>
          </div>
          <div className='subtotal w-100 d-flex justify-content-between align-items-center'>
            <div>Tổng thanh toán</div>
            <div className='subtotal-price'>{totalPrice} đ</div>
          </div>
        </div>
        <div className='w-100 d-flex justify-content-center'>
          <button className="place-order rounded-pill">
            Đặt hàng
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout