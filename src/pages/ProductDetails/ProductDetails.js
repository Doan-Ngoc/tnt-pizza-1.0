// import React from 'react'
// import "./ProductDetails.css"
// import { useLayoutEffect } from 'react';
// const ProductDetails = () => {
//     useLayoutEffect(() => {
//         window.scrollTo(0, 0); // Scrolls the page to the top
//     }, []);
//     return (
//         <div className="container">
//             <div className="row mt-5 product-container">
//                 <div className="product-image-container col-md-6">
//                     <img className="product-image" src="./images/mock-images/popular-pizza-1.jpg" />
//                 </div>
//                 <div className="col-md-6">
//                     <div className="product-dtl">
//                         <div className="product-info">
//                             <div className="product-name">Pizza Hải Sản Pesto Xanh</div>
//                             <div className="product-price-discount"><span>169000 đ</span></div>
//                             <p className="product-description">Tôm, thanh cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh</p>
//                             <div className="row mt-4">
//                                 <div className="col-md-6">
//                                     <label for="size">Kích Thước</label>
//                                     <select id="size" name="size" className="form-control">
//                                         <option>Nhỏ 6"</option>
//                                         <option>Vừa 9"</option>
//                                         <option>Lớn 12"</option>
//                                     </select>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label for="color">Đế</label>
//                                     <select id="color" name="color" className="form-control">
//                                         <option>Dày</option>
//                                         <option>Mỏng giòn</option>
//                                         <option>Viền phô mai</option>
//                                         <option>Viền phô mai xúc xích</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="product-count">
//                                 <label for="size">Số lượng</label>
//                                 <form action="#" className="display-flex">
//                                     <div className="qtyminus">-</div>
//                                     <input type="text" name="quantity" value="1" className="qty" />
//                                     <div className="qtyplus">+</div>
//                                 </form>
//                                 <a href="#" className="round-black-btn rounded-pill">Thêm vào giỏ hàng</a>
//                             </div>
//                         </div>


//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProductDetails

import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetails.css";

const ProductDetails = ({popularDish, comboDishes, pizzaDishes, chickenDishes, appetizerDishes, 
    pastaDishes, saladDishes, drinkDishes, onDecreaseQuantity, onIncreaseQuantity }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Cuộn trang lên đầu
  }, []);

  // Tìm sản phẩm trong các danh sách comboDishes, pizzaDishes, ...
  const findProduct = (productId) => {
    const allDishes = [...popularDish, ...comboDishes, ...pizzaDishes, 
        ...chickenDishes, ...appetizerDishes, ...pastaDishes, ...saladDishes, ...drinkDishes];
    return allDishes.find(dish => dish.id === productId);
  };

  useState(() => {
    const product = findProduct(id);
    setProduct(product);
  }, [id]);

  if (!product) {
    return <div>Loading...PleaCheck :</div>;
  }
  const {title, image, price, content, quantity} = product;
  
  return (
    <div style={{marginBottom:"100px"}} className="container">
      <div className="row mt-5 product-container">
        <div className="product-image-container col-md-6">
          <img className="product-image" src={image} alt={title} />
        </div>
        <div className="col-md-6">
          <div className="product-dtl">
            <div className="product-info">
              <div className="product-name">{title}</div>
              <div className="product-price-discount"><span>{price} đ</span></div>
              <p className="product-description">{content}</p>
              <div className="row mt-4">
                <div className="col-md-6">
                  <label htmlFor="size">Kích Thước</label>
                  <select id="size" name="size" className="form-control">
                    <option>Nhỏ 6"</option>
                    <option>Vừa 9"</option>
                    <option>Lớn 12"</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="color">Đế</label>
                  <select id="color" name="color" className="form-control">
                    <option>Dày</option>
                    <option>Mỏng giòn</option>
                    <option>Viền phô mai</option>
                    <option>Viền phô mai xúc xích</option>
                  </select>
                </div>
              </div>
              <div className="product-count">
                <label htmlFor="size">Số lượng</label>
                <form  className="display-flex">
                  <div ><button  onClick={() => onDecreaseQuantity(id)} className="qtyminus">-</button></div>
                  {/* <input type="text" name="quantity" value="1" className="qty" /> */}
                  <span className="qty">{quantity}</span>
                  <div ><button onClick={() => onIncreaseQuantity(id) } className="qtyplus">+</button></div>
                </form>
                <a href="#" className="round-black-btn rounded-pill">Thêm vào giỏ hàng</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


