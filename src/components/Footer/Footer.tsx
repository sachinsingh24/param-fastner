/** @format */

import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='row m-0'>
          <div className='col-md-6'>
            <div className='wrapper'>
              <div className='footer-logo'>
                <img
                  src={require('../../Assets/mainLogo.png')}
                  alt=''
                  className='img-fluid mb-2'
                />
              </div>
              <div className='menu-links'>
                <ul className='p-0'>
                  <li>
                    <Link to='/'> Home</Link>
                  </li>
                  <li>
                    <Link to='/About'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/Products'>Products</Link>
                  </li>
                  <li>
                    <Link to='/Contact'>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='col2-wrapper'>
              <div className='Address'>
                <h2>CORPORATE OFFICE</h2>
                <p>
                  A-37, Shivam Estate, Ujala Circle, S.G. Highway Rd, Sarkhej,
                  Ahmedabad,Gujarat-380010.
                </p>
              </div>
              <div className='contact'>
                <h3>
                  CONTACT No : <a href='tel:+919586489007'>9586489007</a> /
                  <a href='tel:+919638209447'> 9638209447</a>
                </h3>
                <h4>Email: paramfasteners77@gmail.com</h4>
              </div>

              <div className='whatsapp-quotes d-flex w-100'>
                <div className='download-link'>
                  <a
                    href={require('../../Assets/Param Broucher.pdf')}
                    download='Param Fastener'
                    target='_blank'
                    rel='noreferrer'
                    className=''>
                    <button className='download-btn'>
                      {' '}
                      <span className='text'>Download Brochure</span>
                    </button>
                  </a>
                </div>
                <a href='https://wa.me/9638209447?text=Looking%20for%20the%20best%20value%20in%20fasteners%3F%20Request%20a%20quote%20from%20us%20now'>
                  <div className='btn-wrap'>
                    <img
                      src={require('../../Assets/whatsapp-tag.png')}
                      alt=''
                      className='img-fluid'
                      width='100px'
                    />
                    <div className='whatsapp-tag'>
                      <h3>Click Here</h3>
                      <p>Get Quotes on WhatsApp</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='CopyRight mx-auto'>
          <div className='row align-items-center'>
            <div className='col-6 text-start'>
              <p>Copyright@2023 Param Fasteners All Rights reserved</p>
            </div>
            <div className='col-6 text-end'>
              <p>Developed by Multifly technologies</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
