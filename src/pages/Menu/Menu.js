// import React from 'react'
// import PopularDish from '../Homepage/PopularDish'
// import ProductItem from '../../components/ProductItem/ProductItem'
// import mockPopularDish from '../../mockData/mockPopularDish'
// import "./Menu.css"
// import { useEffect, useLayoutEffect } from 'react'
// const Menu = () => {

//     useLayoutEffect(() => {
//         window.scrollTo(0, 0); // Scrolls the page to the top
//     }, []);


//     const listPopularDish = mockPopularDish && mockPopularDish.map(dish => {
//         const { productName, productImage, productPrice, productDescription, id } = dish
//         return (
//             <ProductItem
//                 productName={productName}
//                 productImage={productImage}
//                 productPrice={productPrice}
//                 productDescription={productDescription}
//                 id={id}
//             />)

//     })
//     return (
//         <div className='menu'>
//             <div className='menu-category'>
//                 <h1>Full Menu</h1>
//                 <h2>COMBO</h2>
//                 <div className='listPopularDish d-flex gap-4 '>
//                     {listPopularDish}
//                 </div>
//             </div>

//             <div className='menu-category1'>
//                 <h2>PIZZA</h2>
//                 <div className='listPopularDish d-flex gap-4 '>
//                     {listPopularDish}
//                 </div>
//             </div>



//             <div className='menu-category'>
//                 <h2>GÀ GIÒN</h2>
//                 <div className='listPopularDish d-flex gap-4 '>
//                     {listPopularDish}
//                 </div>
//             </div>

//             <div className='menu-category'>
//                 <h2>KHAI VỊ</h2>
//                 <div className='listPopularDish d-flex gap-4 '>
//                     {listPopularDish}
//                 </div>
//             </div>

//             <div className='menu-category'>
//                 <h2>MỲ Ý</h2>
//                 <div className='listPopularDish d-flex gap-4 '>
//                     {listPopularDish}
//                 </div>
//             </div>

//             <div className='menu-category'>
//                 <h2>SALAD</h2>
//                 <div className='listPopularDish d-flex gap-4 '>
//                     {listPopularDish}
//                 </div>
//             </div>

//             <div className='menu-category'>
//                 <h2>THỨC UỐNG</h2>
//                 <div className='listPopularDish d-flex gap-4 '>
//                     {listPopularDish}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Menu

import React from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import './Menu.css';

const Menu = ({
  comboDishes,
  pizzaDishes,
  chickenDishes,
  appetizerDishes,
  pastaDishes,
  saladDishes,
  drinkDishes,
  onAddToCart,
  onIncreaseQuantity,
  onDecreaseQuantity
}) => {
  const renderDishes = (dishes) => {
    return dishes.map((dish) => (
      <ProductItem
        key={dish.id}
        productName={dish.title}
        productImage={dish.image}
        productPrice={dish.price}
        productDescription={dish.content}
        id={dish.id}
        onAddToCart={onAddToCart}
      />
    ));
  };

  return (
    <div className="menu ">
      <div className="menu-category mb-5">
        <h1>Full Menu</h1>
        <h2>COMBO</h2>
        <div className="listPopularDish d-flex flex-wrap gap-5 justify-content-center my-5">{renderDishes(comboDishes)}</div>
      </div>

      <div className="menu-category mb-5">
        <h2>KHAI VỊ</h2>
        <div className="listPopularDish d-flex flex-wrap gap-5 justify-content-center my-5">{renderDishes(appetizerDishes)}</div>
      </div>

      <div className="menu-category mb-5">
        <h2>PIZZA</h2>
        <div className="listPopularDish d-flex flex-wrap gap-5 justify-content-center my-5">{renderDishes(pizzaDishes)}</div>
      </div>

      <div className="menu-category mb-5">
        <h2>GÀ GIÒN</h2>
        <div className="listPopularDish d-flex flex-wrap gap-5 justify-content-center my-5">{renderDishes(chickenDishes)}</div>
      </div>

      <div className="menu-category mb-5">
        <h2>MỲ Ý</h2>
        <div className="listPopularDish d-flex flex-wrap gap-5 justify-content-center my-5">{renderDishes(pastaDishes)}</div>
      </div>

      <div className="menu-category mb-5">
        <h2>SALAD</h2>
        <div className="listPopularDish d-flex flex-wrap gap-5 justify-content-center my-5">{renderDishes(saladDishes)}</div>
      </div>

      <div className="menu-category mb-5">
        <h2>THỨC UỐNG</h2>
        <div className="listPopularDish d-flex flex-wrap gap-5 justify-content-center my-5">{renderDishes(drinkDishes)}</div>
      </div>
    </div>
  );
};

export default Menu;







