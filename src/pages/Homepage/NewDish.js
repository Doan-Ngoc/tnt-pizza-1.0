import React from 'react'
import { Link } from 'react-router-dom'

const NewDish = () => {
  return (
    <section className='new-dish-container'>
      <div className="new-dish">
        <div className='new-dish-text'>
          <h1 className='title'>TRY OUT OUR NEW DISH</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, maiores, non neque laborum provident nemo blanditiis ratione distinctio, magni facere unde modi libero? Autem, at quo. Nesciunt quidem vel hic.</p>
          <button className='btn rounded-pill w-30 order-now'>
            <Link className="order-now-btn" to="/menu">Order Now</Link></button>
        </div>
        <div className='new-dish-img'>
          <img className='img-fluid' src='images/homepage/new-dish.png' alt='New Dish' />
        </div>
      </div>
    </section>
  )
}

export default NewDish