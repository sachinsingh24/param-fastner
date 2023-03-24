/** @format */

import React from 'react';
import './About.css';

const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='About-head'>
          <img
            src={require('../../Assets/Param Fastner Logo.png')}
            width={'320px'}
            alt='Param Fastner Logo'
          />
        </div>
        <div className='About-body'>
          <div className='About-head'>
            <h2>About:</h2>
            <h3>
              “ Param Fastener is a leading nut and bolt wholesaler company. We
              provide top quality fasteners for industrial, commercial, and
              residential applications. We believe that our products will help
              secure your future by providing reliable and durable solutions for
              all your fastening needs.”
            </h3>
          </div>
          <div className='about-tag'>
            <h3>High Quality Fasteners:</h3>
            <h4>
              Our fasteners are manufactured using the latest technologies and
              the highest grade of materials to ensure you get the most durable
              and reliable fastening solutions possible.
            </h4>
          </div>
          <div className='about-tag'>
            <h3>Wide Range of Products:</h3>
            <h4>
              We offer a wide range of products to meet all kinds of fastening
              needs from industrial, commercial, and residential applications.
              Whether you need stainless steel nuts and bolts or carbon steel
              screws, we have the right product for you.
            </h4>
          </div>
          <div className='about-tag'>
            <h3>Competitive Prices:</h3>
            <h4>
              We strive to offer competitive prices on all our products so you
              can get the most value for your money without compromising on
              quality.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
