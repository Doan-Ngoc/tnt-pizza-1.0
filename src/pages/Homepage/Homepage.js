import React from 'react'
import PromotionSlider from './PromotionSlider'
import WhyUs from './WhyUs'
import './Homepage.css';
import NewDish from './NewDish';
import PopularDish from './PopularDish';
import Delivery from './Delivery';

const Homepage = () => {
  return (
    <div className='homepage'>
      <PromotionSlider />
      <WhyUs />
      <NewDish />
      <PopularDish />
      <Delivery />
    </div>
  )
}

export default Homepage