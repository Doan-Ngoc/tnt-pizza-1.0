import React from 'react'
import ProductItem from '../../components/ProductItem/ProductItem'
import mockPopularDish from '../../mockData/mockPopularDish'
import { Link } from 'react-router-dom'
const PopularDish = ({onAddToCart}) => {
  /*Navbar*/
  const PopularDishNavBar = () => {
    return (
      <div className="row">
        <ul className="nav nav-tabs menu_tab" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="pizza-tab" data-bs-toggle="tab" href="#pizza" role="tab">Pizza</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="spaghetti-tab" data-bs-toggle="tab" href="#spaghetti" role="tab">Mỳ Ý</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="appetizer-tab" data-bs-toggle="tab" href="#appetizer" role="tab">Khai vị</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="salad-tab" data-bs-toggle="tab" href="#salad" role="tab">Salad</a>
          </li>
        </ul>
      </div>

    )
  }

  /*Popular dish list*/
  const listPopularDish = mockPopularDish && mockPopularDish.map(dish => {
    const { title, image, price, content, id } = dish
    return (
      <ProductItem
        productName={title}
        productImage={image}
        productPrice={price}
        productDescription={content}
        id={id}
        onAddToCart={onAddToCart}
      />)

  })
  return (
    <div className='popular-dish row w-75 mx-auto text-center'>
      <h1 className="title">POPULAR DISHES</h1>
      <PopularDishNavBar />
      <div className='listPopularDish d-flex gap-4 '>
        {listPopularDish}
      </div>
      <Link className="see-all-menu" to="/menu"><i><h4>See all menu
        <i class="fa fa-arrow-circle-right"></i>
      </h4></i>

      </Link>
    </div>
  )
}

export default PopularDish