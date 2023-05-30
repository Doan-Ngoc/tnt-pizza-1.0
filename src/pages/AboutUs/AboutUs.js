import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Delivery from '../Homepage/Delivery';
import "./AboutUs.css"
import { useLayoutEffect } from 'react';

const AboutUs = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Scrolls the page to the top
  }, []);
  return (
    <div className='about-us'>
      <h1>OUR STORY</h1>
      <div className="about-us-container">
        <div className='about-us-text'>
          <i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum ligula felis, vitae lacinia turpis
              tincidunt a. Nullam id sollicitudin nisi, eu cursus justo. Donec tincidunt eros ac eleifend pharetra. Fusce
              posuere elit at arcu bibendum, in eleifend lacus fermentum. Sed volutpat lacus ut nunc tempor, ac pulvinar
              nulla malesuada.
            </p>
            <p>
              Morbi at neque in nibh consectetur tempus at sit amet purus. Aliquam commodo nunc quam, ut tempus nunc
              finibus a. Nulla facilisi. Duis consequat urna ut mi consequat, id scelerisque ligula aliquam. Aliquam
              posuere efficitur nunc in commodo. Proin blandit laoreet eros a scelerisque.
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dignissimos quaerat obcaecati ea beatae officia porro doloremque fuga? Ullam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sapiente magnam voluptatum delectus atque est.</p>
          </i>
        </div>
        <div className='about-us-img'>
          <img src="images\about-us\about-us-1.jpg" />

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
