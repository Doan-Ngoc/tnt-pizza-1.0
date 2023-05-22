

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({ productName, productImage, productPrice, productDescription, id }) => {
  return (
    <div className="product-item card d-flex flex-column align-items-center">
      <Link to={`/dish-details/${id}`} className="card-img-top">
        <img src={productImage} alt={productName} />
      </Link>
      <div className="card-body text-center">
      
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">{productPrice}</p>
        <button className="btn btn-primary w-100 rounded-pill">
          <Link className="order-now-btn" to={`/dish-details/${id}`}>Add to cart</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;




