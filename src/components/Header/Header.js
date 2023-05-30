
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
const Header = ({ cart, onDeleteProduct, onDecreaseQuantity, onIncreaseQuantity }) => {

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
    return <div className='cart-item d-flex justify-content-between gap-5 px-5 py-4'>
      <div className="cart-img w-25"><img className='header-cart-item-img' src={image} alt={title} /></div>
      <div className='cart-item-info w-75 d-flex flex-column gap-3'>
        <div className='d-flex justify-content-between'>
          <div className="cart-name">{title}</div>
          <button className="close" onClick={() => onDeleteProduct(id)}><FaTrashAlt className='trash' /></button>
        </div>
        <div className='d-flex justify-content-between align-items-center '>
          <div className="quantity-item">
            <button
              style={{ background: "#0b603d", padding: "5px 10px", marginRight: "5px" }}
              className="btn btn-primary btn-sm"
              onClick={() => onDecreaseQuantity(id)}
            // disabled={isDisabledDecreaseButton}
            >
              -
            </button>
            <span style={{ fontSize: "1.3rem" }}> {quantity}</span>
            <button
              style={{ background: "#0b603d", padding: "5px 10px", marginLeft: "10px" }}
              className="btn btn-primary btn-sm"
              onClick={() => onIncreaseQuantity(id)}
            >
              +
            </button>
          </div>
          <div className="price-item">{price}</div>
        </div>
      </div>
    </div>
  })

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-brand">
          <Link to="/"><img className='header-logo' src="/logo.png" /></Link>
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
          <button className='btn rounded-pill cart-btn d-flex align-items-center gap-1' data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <i className="fa fa-shopping-cart mr-2"></i>
            Giỏ hàng
            <span className='cart-quantity'>{lengthCart}</span>

          </button>
          <div className="cart-container collapse" id="collapseExample">
            {cartContainer}
            {
              lengthCart ? (
                <div className=' py-4 px-5' style={{ backgroundColor: "var(--background-color-1)" }}>
                  <div className='total-price pb-4'>
                    <h4>Tổng tiền: </h4>
                    <span className='totalPrice'>{totalPrice} đ</span>
                  </div>
                  <button onClick={onNavigateToProductDetail} className='btn-checkout rounded-pill py-3' data-bs-dismiss="collapse">Thanh toán</button>
                </div>

              )
                : (<p className='content-cart'>Chưa có sản phẩm trong giỏ hàng!</p>)
            }


          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header