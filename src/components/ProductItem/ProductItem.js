

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({ productName, productImage, productPrice, productDescription, id, onAddToCart }) => {

  return (
    <div className="product-item card d-flex flex-column align-items-center">

      <img src={productImage} className="card-img-top" alt={productName} />

      <div className="card-body text-center">

        <h5 className="card-titled">{productName}</h5>
        <div className='d-flex justify-content-between mb-3'>
          <p className="card-text">{productPrice.toLocaleString('vi', {style : 'currency', currency : 'VND'})} </p>
        </div>
        <Link to={`/dish-details/${id}`} className="card-img-top">
          <button className="btn btn-primary rounded-pill">
            Xem chi tiết </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;




