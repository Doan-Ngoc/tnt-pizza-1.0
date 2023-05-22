import React from 'react'
import { useEffect } from 'react';

const WhyUs = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollImg = document.getElementById('scroll-image');
      const scrollImgRect = scrollImg.getBoundingClientRect();
      // Check if the element is in view and animation has not been triggered
      if (scrollImgRect.top < window.innerHeight && scrollImgRect.bottom >= 0 && !scrollImg.classList.contains('spin')) {
        scrollImg.classList.add('spin');
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='why-us w-75'>
      <div className='why-us-img d-flex justify-content-center'>
        <img className='scroll-img img-fluid' id="scroll-image" src='images\homepage\scroll-image.png' />
      </div>
      <div className='why-us-text' >
        <h1 className="title">WE MAKE THE BEST PIZZA IN YOUR TOWN</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad est, recusandae officia voluptatum, ipsa nemo aperiam modi corrupti dolore atque unde vitae deserunt sequi temporibus sunt iure cum perspiciatis delectus!</p>
        <div className='why-us-reasons'>
          <div className='why-us-reasons-item'>
            <i class="fa fa-pizza-slice"></i>
            <span>Fresh food</span>
          </div>

          <div className='why-us-reasons-item'>
            <i className="fa fa-shipping-fast"></i>
            <span>Fast Delivery</span>
          </div>
          <div className='why-us-reasons-item'>
            <i class="fa fa-utensils"></i>
            <span>Quality Maintain</span>
          </div>
          <div className='why-us-reasons-item'>
            <i class="fa fa-clock"></i>
            <span>24/7 Service</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs