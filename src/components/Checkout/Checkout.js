import React from 'react'
import './Checkout.css'
import { useLayoutEffect, useState, useEffect } from 'react';

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

  /*Tính tiền ship*/
  let shippingFee = 0
  if (totalPrice <= 200000) {
    shippingFee = 30000
  }
  else {
    shippingFee = 0
  }
  /*Tính tiền giảm giá*/
  const [voucherCode, setVoucherCode] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  /*if (voucherCode === 'anngon') {
    discountAmount = 10000
  } else {
    discountAmount = 0
  }*/
  let priceUpdated = 0
  const handleApply = () => {
    if (voucherCode === 'anngon') {
      setResultMessage('-10,000 đ');
      setDiscountAmount(10000);
    } else {
      setResultMessage('Mã giảm giá không hợp lệ');
      setDiscountAmount(0);
    }
  };
  priceUpdated = voucherCode
  /* Tổng tiền sau khi tính tiền ship và tiền giảm giá*/
  const [finalPrice, setFinalPrice] = useState(totalPrice + shippingFee - discountAmount)
  useEffect(() => {
    setFinalPrice(totalPrice + shippingFee - discountAmount)
  }, [shippingFee, discountAmount])

  return (
    <div className='checkout container'>
      <div className="billing-detail w-50 m-auto">
        <h2 className='mb-4 text-center'>Thông tin đơn hàng</h2>
        <form>
          <div style={{ backgroundColor: "var(--background-color-1", padding: 30, borderRadius: '20px' }}>
            <div className="input-name">
              <span htmlFor="fullname">Tên của bạn</span><span style={{ color: '#D6763C' }}>*</span>
              <div><input type="text" id="fullname" required /></div>
            </div>
            <div className="input-address">
              <span htmlFor="address">Địa chỉ giao hàng</span><span style={{ color: '#D6763C' }}>*</span>
              <div><input type="text" id="address" required /></div>
            </div>
            <div className="input-phone">
              <span htmlFor="phone">Số điện thoại</span><span style={{ color: '#D6763C' }}>*</span>
              <div><input type="text" id="phone" required /></div>
            </div>
            <div className="input-mail">
              <span htmlFor="mail">Địa chỉ email</span><span style={{ color: '#D6763C' }}>*</span>
              <div><input type="email" id="mail" required /></div>
            </div>
            <div className='subtotal w-100 d-flex justify-content-between align-items-center'>
              <div>Tổng đơn hàng:</div>
              <div className='subtotal-price'>{totalPrice} đ</div>
            </div>
            <div className='subtotal w-100 d-flex justify-content-between align-items-center'>
              <div>Phí giao hàng:</div>
              <div className='subtotal-price'>{shippingFee} đ</div>
            </div>
            <div className='voucher w-100 d-flex justify-content-between align-items-center'>
              <div>Mã giảm giá:</div>
              <div><input style={{ padding: "0px 10px" }} type='text' value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)} />
                <button type='button' className='rounded-pill ms-3' onClick={handleApply}>Áp dụng</button></div>
            </div>
            {resultMessage && <div className='w-100 d-flex justify-content-end align-items-center discount-amount'>{resultMessage}</div>}
            <div className='subtotal w-100 d-flex justify-content-between align-items-center'>
              <div>Tổng thanh toán:</div>
              <div className='subtotal-price'>{finalPrice} đ</div>
            </div>
            <div className='w-100 d-flex justify-content-center'>
              <button type="button" className="place-order rounded-pill" id='place-order'>
                Đặt hàng
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              Đơn hàng của bạn đã được ghi nhận. <br /> Cảm ơn bạn đã lựa chọn TNT Pizza.
            </div>
            <div className="modal-footer">
              <button type="button" className="submit-btn rounded-pill" data-bs-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Checkout