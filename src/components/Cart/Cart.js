import React, { useEffect } from 'react'
import './Cart.css'
import './CartResponsive.css'
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, onDeleteProduct, onDecreaseQuantity, onIncreaseQuantity }) => {
  // useEffect(() =>{onConditionalLogin();})
  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Scrolls the page to the top
  }, []);
  const navigate = useNavigate();
  const onNavigateToCheckOut = () => {
    const to = `/checkout`;
    navigate(to);
    // onConditionalLogin();
  };

  const onNavigateToLoginRegisterPage = () => {
    const to = `/login&register`;
    navigate(to);
  };
 
  const onConditionalLogin = () => {
    const successLoginStorage = JSON.parse(localStorage.getItem("successLogin"));
    
    if(successLoginStorage === true) {
      onNavigateToCheckOut();
    } else{
      onNavigateToLoginRegisterPage();
    }
  }
  
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
    const { title, image, price, id, quantity } = cartItem;
    return (
      <tr key={id}>
        <th style={{ paddingTop: "20px" }} scope="row">{index + 1}</th>
        <td >
          <img src={image} alt={title} style={{
            width: "50%", height: "50px"
          }} />
        </td>
        <td style={{ paddingTop: "20px" }}>{title}</td>

        <td style={{ paddingTop: "20px" }}>{price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
        <td>
          <button
            style={{ background: "#0b603d" }}
            className="btn btn-primary"
            onClick={() => onDecreaseQuantity(id)}
          // disabled={isDisabledDecreaseButton}
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            style={{ background: "#0b603d" }}
            className="btn btn-primary"
            onClick={() => onIncreaseQuantity(id)}
          >
            +
          </button>
        </td>
        <td style={{ paddingTop: "20px" }}>{(quantity * price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
        <td>
          <button
            style={{ background: "none", color: "#00814b", border: "none" }}
            className="btn btn-danger"
            onClick={() => onDeleteProduct(id)}
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    )

  })
  return (
    <div>
      {cart.length > 0 ? (
        <div className="container w-75 my-5">
          <h3 className="home-shoppingCart">
            <span>Giỏ hàng của bạn</span>
          </h3>
          <div>
            <table className="table table-cart my-5 text-center">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "130px" }}>#</th>

                  <th scope="col"></th>
                  <th scope="col">Sản phẩm</th>
                  <th scope="col">Giá tiền</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Tổng tiền</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {cartBodyElements}
                <tr style={{ backgroundColor: 'var(--background-color-1' }} >
                  <td style={{ fontWeight: "600", fontSize: "1.1rem" }} colspan="2">Tổng đơn hàng:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{ fontWeight: "600", fontSize: "1.1rem" }} >{totalPrice.toLocaleString('vi', {style : 'currency', currency : 'VND'})} </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='w-100 d-flex justify-content-center'>
            <button className="Proceed-to-checkout rounded-pill" onClick={onConditionalLogin}>
              Thanh toán
            </button>
          </div>
        </div>
      ) : <div className="m-5 d-flex justify-content-center align-items-center">
        <h4 >Giỏ hàng của bạn chưa có sản phẩm nào, <Link to="/menu">tiếp tục mua sắm</Link></h4></div>}
    </div>
  )
}

export default Cart