import React from 'react'
import { Link } from 'react-router-dom'

const Delivery = () => {
  return (
    <div className='delivery d-flex w-75'>
      <img className="delivery-img img-fluid" src='images/homepage/delivery.gif' />
      <div className='delivery-text'>
        <h2 className="title">YOUR FAVORITE PIZZA, ON THE WAY!</h2>

        <div className='delivery-benefit-item d-flex  gap-4 align-items-center px-3 py-2'>
          <i class="material-icons">house</i>
          <span >Delivery in 30 minutes</span>
        </div>
        <div className='delivery-benefit-item d-flex  gap-4 align-items-center px-3 py-2'>
          <i class="material-icons">fastfood</i>
          <span >Free Shipping From 75$</span>
        </div>
        <Link to="/menu">
          <button className='btn rounded-pill w-30 order-now, order-now-btn'
          >Order Now</button>
        </Link>


      </div>
    </div>
  )
}

export default Delivery