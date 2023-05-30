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
import { useLayoutEffect } from 'react';

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
  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Scrolls the page to the top
  }, []);


  /*Render dishes*/
  const renderPizzaDishes = pizzaDishes && pizzaDishes.map(dish => (
    <div className=' col-lg-3 col-md-6 col-sm-12'>
      <ProductItem
        key={dish.id}
        productName={dish.title}
        productImage={dish.image}
        productPrice={dish.price}
        productDescription={dish.content}
        id={dish.id}
        onAddToCart={onAddToCart}
      />
    </div>
  ));


  /*Draft */
  const renderDishes = (dishes) => {
    return dishes.map((dish) => (
      <div className=' col-lg-3 col-md-6 col-sm-12'>
        <ProductItem
          key={dish.id}
          productName={dish.title}
          productImage={dish.image}
          productPrice={dish.price}
          productDescription={dish.content}
          id={dish.id}
          onAddToCart={onAddToCart}
        />
      </div>
    ));
  };

  return (
    <div className="menu">
      <img className="menu-header img-fluid" src='images/menu-header.png' />
      <div className="menu-category">
        <h2>COMBO</h2>
        <div className="listPopularDish row">{renderDishes(comboDishes)}</div>
      </div>
      <div className="menu-category">
        <h2>PIZZA</h2>
        <div className="listPopularDish row">{renderPizzaDishes}</div>
      </div>
      <div className="menu-category">
        <h2>GÀ GIÒN</h2>
        <div className="listPopularDish row">{renderDishes(chickenDishes)}</div>
      </div>
      <div className="menu-category">
        <h2>KHAI VỊ</h2>
        <div className="listPopularDish row">{
          renderDishes(appetizerDishes)}</div>
      </div>
      <div className="menu-category">
        <h2>MỲ Ý</h2>
        <div className="listPopularDish row">{renderDishes(pastaDishes)}</div>
      </div>
      <div className="menu-category">
        <h2>SALAD</h2>
        <div className="listPopularDish row">{renderDishes(saladDishes)}</div>
      </div>

      <div className="menu-category">
        <h2>THỨC UỐNG</h2>
        <div className="listPopularDish row">{renderDishes(drinkDishes)}</div>
      </div>
    </div>

  )
};

export default Menu;




