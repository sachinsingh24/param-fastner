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
            <div className='col-12 col-sm-12 col-md-8'>
              <div className='ProductBrand'>
                <img
                  src={require('../../Assets/productBrand/DHJ.png')}
                  alt='DHJ'
                  className='img-fluid'
                />
                <img
                  src={require('../../Assets/productBrand/GMF.png')}
                  alt='DHJ'
                  className='img-fluid'
                />
                <img
                  src={require('../../Assets/productBrand/KUN.png')}
                  alt='DHJ'
                  className='img-fluid'
                />
                <img
                  src={require('../../Assets/productBrand/RAAJ.png')}
                  alt='DHJ'
                />
                <img
                  src={require('../../Assets/productBrand/TVS.png')}
                  alt='DHJ'
                  className='img-fluid'
                />
                <img
                  src={require('../../Assets/productBrand/Unbrako.png')}
                  alt='DHJ'
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
          {/* <div className='product-description'>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <div className='SRNo'>Sr.No</div>
                <div className='length'>length</div>
                <div className='size'>size</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
