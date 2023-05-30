import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetails.css";

const ProductDetails = ({ popularDish, comboDishes, pizzaDishes, chickenDishes, appetizerDishes, pastaDishes, saladDishes, drinkDishes, onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('Nhỏ 6"');
  const [selectedCrust, setSelectedCrust] = useState('Dày');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const findProduct = (productId) => {
      const allDishes = [
        ...comboDishes,
        ...pizzaDishes,
        ...chickenDishes,
        ...appetizerDishes,
        ...pastaDishes,
        ...saladDishes,
        ...drinkDishes
      ];
      return allDishes.find((dish) => dish.id === productId);
    };

    const product = findProduct(id);
    if (product) {
      setProduct(product);
    }

    let additionalPrice = 0;
    if (selectedSize === 'Nhỏ 6"') {
      additionalPrice = 0;
    } else if (selectedSize === 'Vừa 9"') {
      additionalPrice = 30000;
    } else if (selectedSize === 'Lớn 12"') {
      additionalPrice = 50000;
    }

    if (selectedCrust === 'Dày') {
      additionalPrice += 0;
    } else if (selectedCrust === 'Mỏng giòn') {
      additionalPrice += 15000;
    } else if (selectedCrust === 'Viền phô mai') {
      additionalPrice += 18000;
    } else if (selectedCrust === 'Viền phô mai xúc xích') {
      additionalPrice += 20000;
    }

    const productPrice = product ? product.price : 0;
    const total = productPrice + additionalPrice;
    setTotalPrice(total);
  }, [id, selectedSize, selectedCrust, comboDishes, pizzaDishes, chickenDishes, appetizerDishes, pastaDishes, saladDishes, drinkDishes]);

  const handleSizeChange = (event) => {
    if (product && pizzaDishes.some(dish => dish.id === product.id)) {
      setSelectedSize(event.target.value);
    }
  };

  const handleCrustChange = (event) => {
    if (product && pizzaDishes.some(dish => dish.id === product.id)) {
      setSelectedCrust(event.target.value);
    }
  };

  if (!product) {
    return <div>Loading... Please wait.</div>;
  }

  const { title, image, price, content } = product;
  const isPizzaDish = pizzaDishes.some(dish => dish.id === product.id);

  return (
    <div style={{ marginBottom: "100px" }} className="container">
      <div className="row mt-5 product-container">
        <div className="product-image-container col-md-6">
          <img className="product-image" src={image} alt={title} />
        </div>
        <div className="col-md-6">
          <div className="product-dtl">
            <div className="product-info">
              <div className="product-name">{title}</div>
              <div className="product-price-discount">
                <span>{totalPrice} đ</span>
              </div>
              <p className="product-description">{content}</p>
              {isPizzaDish && (
              <div className="row mt-4">
                <div className="col-md-6">
                  <label htmlFor="size">Kích Thước</label>
                  <select
                    id="size"
                    name="size"
                    className="form-control"
                    value={selectedSize}
                    onChange={handleSizeChange}
                  >
                    <option>Nhỏ 6"</option>
                    <option>Vừa 9"</option>
                    <option>Lớn 12"</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="color">Đế</label>
                  <select
                    id="color"
                    name="color"
                    className="form-control"
                    value={selectedCrust}
                    onChange={handleCrustChange}
                  >
                    <option>Dày</option>
                    <option>Mỏng giòn</option>
                    <option>Viền phô mai</option>
                    <option>Viền phô mai xúc xích</option>
                  </select>
                </div>
              </div>
            )}
            <a onClick={() => onAddToCart(id)} href="#" className="round-black-btn rounded-pill">Thêm vào giỏ hàng</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
              }


             
  
export default ProductDetails;