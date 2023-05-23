import React from 'react'
import './Cart.css'
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Cart = ({ cart, onDeleteProduct, onDecreaseQuantity, onIncreaseQuantity }) => {

  const navigate = useNavigate();
  const onNavigateToCheckOut = () => {
    const to = `/checkout`;
    navigate(to);
  };

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
        <th scope="row">{index}</th>
        <td>
          <button
            style={{ background: "none", color: "#00814b", border: "none" }}
            className="btn btn-danger"
            onClick={() => onDeleteProduct(id)}
          >
            <FaTrashAlt />
          </button>
        </td>
        <td>{title}</td>
        <td >
          <img src={image} alt={title} style={{
            width: "50%", height: "50px"
          }} />
        </td>
        <td>{price}</td>
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
        <td>{quantity * price}</td>

      </tr>
    )

  })
  return (
    <div>
      <div className="container">
        <h3 className="home-shoppingCart">
          <p>HOME/</p><span> SHOPPING CART</span>
        </h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" style={{ width: "150px" }}>#</th>
                <th scope="col">...</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartBodyElements}
              <tr>
                <td style={{ fontWeight: "700" }}>Total price</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ fontWeight: "700" }}>{totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="Cart-Total">
          <h3 className="CartP">Cart Totals</h3>
          <div className="Cart">
            <div className="text">Subtotal</div>
            <div className="text bill"><span>{totalPrice} đ</span></div>
          </div>
          <hr />
          <div className="Cart">
            <div className="text">Shipping Free</div>
            <div className="text">Free!!!</div>
          </div>
          <hr />
          <div className="Cart">
            <div>Total</div>
            <div className="text bill1 "><span>{totalPrice} đ</span></div>
          </div>
          <button className="Proceed-to-checkout" onClick={onNavigateToCheckOut}>PROCEED TO
            CHECKOUT</button>
        </div>
      </div>

    </div>
  )
}

export default Cart