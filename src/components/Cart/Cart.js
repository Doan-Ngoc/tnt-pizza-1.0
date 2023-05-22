import React from 'react'
import './Cart.css'
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Cart = ({ cart, onDeleteProduct }) => {

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
    const cartContainer = cart.map((cartItem) => {
        const { title, image, price, id, quantity } = cartItem;
        return <div>
            <tbody id="tbody" >
                <tr key={id} >
                    <td  >
                        <button className="dauX" onclick={() => onDeleteProduct(id)}><FaTrashAlt /></button>
                    </td>
                    <td>
                        <img className="imgs" src={image} alt="img-pro-1" />
                    </td>
                    <td id="name">{title}</td>
                    <td>$<span class="price">{price}</span></td>
                    <td class="number">{quantity}</td>
                    <td id="total">$<span>{price}</span></td>
                </tr>

            </tbody>
        </div>

    })
    return (
        <div>
            <div className="container">
                <h3 className="home-shoppingCart">
                    <p>HOME/</p><span> SHOPPING CART</span>
                </h3>
                <div className="product-price ">
                    <table>
                        <thead>
                            <tr>
                                <th />
                                <th />
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        {cartContainer}
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