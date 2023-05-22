import React from 'react'
import './Header.css'
import AboutUs from '../../pages/AboutUs/AboutUs';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <img src="/logo.png" />
        </a>
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
          <button className='btn rounded-pill cart-btn d-flex align-items-center gap-1'>
            <i className="fa fa-shopping-cart mr-2"></i>
            Giỏ hàng
            <span className='cart-quantity'>0</span>
          </button>
        </div>
      </nav>



    </div>
  )
}

export default Header