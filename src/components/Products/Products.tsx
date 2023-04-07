/** @format */

import React from 'react';
import './Projects.css';
import { productdata } from './data';

const Projects = () => {
  return (
    <section>
      <div className='container'>
        <div className='productHead text-center my-3'>
          <h1>Fasteners</h1>
          <p> All types of fasteners details given below</p>
        </div>
        <div className='product-body'>
          <div className='row'>
            {productdata.map((item, index) => {
              return (
                <div className='col-12 col-sm-6 col-md-4' key={index}>
                  <div className='product-content'>
                    <img
                      src={item.img}
                      alt='Allen Button'
                      width={'250px'}
                      className='img-fluid'
                    />
                    <h4>{item.text}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='product-description'>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <div className='SRNo'>Sr.No</div>
                <div className='length'>length</div>
                <div className='size'>size</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
