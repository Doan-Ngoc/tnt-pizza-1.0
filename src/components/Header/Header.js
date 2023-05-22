import React, { useState } from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
const Header = ({ cart, onDeleteProduct }) => {
  const [card, setCard] = useState(false)


  const lengthCart = cart.length;
  const getTotalPrice = (cart) => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      const cartItem = cart[i];
      totalPrice += cartItem.price * cartItem.quantity;
    }

    return totalPrice;
  };
  const totalPrice = getTotalPrice(cart);

  const navigate = useNavigate();
  const onNavigateToProductDetail = () => {
    const to = `/cart`;
    navigate(to);
  };
  const cartContainer = cart.map((cartItem) => {
    const { title, image, price, id, quantity } = cartItem;
    return <div className='cart-item'>
      <div className="cart-total">
        <div className="cart-img"><img src={image} alt={title} /></div>
        <div className="cart-name">{title}</div>
      </div>
      <div className="price-item">{price}</div>
      <div className="quantity-item">
        <span> {quantity}</span>
      </div>
      <button className="close" onClick={() => onDeleteProduct(id)}><FaTrashAlt className='trash' /></button>
    </div>
  })



  const onCart = () => {
    setCard(true)
  }

  const isStyleCard = card ? " d-block" : ""

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-brand">
          <Link to="/"><img src="/logo.png" /></Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-5 rounded-pill">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Trang chủ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">Về chúng tôi</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
          </ul>
          <button onClick={onCart} className='btn rounded-pill cart-btn d-flex align-items-center gap-1'>
            <i className="fa fa-shopping-cart mr-2"></i>
            Giỏ hàng
            <span className='cart-quantity'>{lengthCart}</span>

          </button>
          <div className='cart-container'>
            {cartContainer}
            {
              lengthCart ? (
                <>
                  <div className='total-price'>
                    <h4>Total: </h4>
                    <span className='totalPrice'>{totalPrice} đ</span>
                  </div>

                  <div>
                    <button onClick={ onNavigateToProductDetail} className='btn-checkout'>Check Out</button>
                  </div>
                </>

              )
                : (<p className='content-cart'>No Product!</p>)
            }


          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header