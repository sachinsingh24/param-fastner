/** @format */

import React, { useRef } from 'react';
import './Home.css';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const Home = () => {
  const form: any = useRef();
  // const validateSubmitForm = () => {};
  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.target.reset();
    emailjs
      .sendForm(
        'service_ko7o3uo',
        'template_xk4jqr1',
        form.current,
        'gL-UD6RKxWqo5JX-b'
      )
      .then(
        (result: any) => {
          console.log(result.text);
          window.alert('message send');
        },
        (error: any) => {
          console.log(error.text);
          window.alert('please try again...');
        }
      );
  };
  return (
    <section>
      <div className='container-fluid p-0'>
        <div className='banner-section'>
          <div className='banner-img'>
            <img
              src={require('../../Assets/Banner1.png')}
              className='img-fluid'
              alt=''
            />
          </div>
          <div className='banner-tag'>
            <h1>Everything you need, Right here</h1>
            <img src={require('../../Assets/Param Fastner Logo.png')} alt='' width={'300px'} />
          </div>
        </div>
      </div>
      <div className='container text-center'>
        <div className='material'>
          <div className='material-1'>
            <img
              src={require('../../Assets/Allen Button.png')}
              alt='nut'
              className='img-fluid'
            />
            <h4>ALLEN BUTTON</h4>
          </div>
          <div className='material-1'>
            <img
              src={require('../../Assets/Allen Cap.png')}
              alt=''
              className='img-fluid'
            />
            <h4>ALLEN CAP</h4>
          </div>
          <div className='material-1'>
            <img
              src={require('../../Assets/Hex-nut.png')}
              alt='Hex-nut'
              className='img-fluid'
            />
            <h4>HEX BOLT</h4>
          </div>
        </div>
        <div className='view-more'>
          <Link to='/products' id='btn'>
            {' '}
            <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
              <g data-name='Layer 2' id='Layer_2'>
                <path d='M19,26a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L26.59,16l-8.3-8.29a1,1,0,0,1,1.42-1.42l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,19,26Z' />
                <path d='M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z' />
              </g>
              <g id='frame'>
                <rect fill='none' height='32' width='32' />
              </g>
            </svg>
            View More
          </Link>
        </div>
      </div>
      <div className='container-fluid p-0'>
        <div className='contact-banner'>
          <div className='contact-banner-img'>
            <img
              src={require('../../Assets/Banner2.jpg')}
              alt=''
              className='img-fluid'
            />
          </div>
          <div className='contact-form'>
            <div className='Enquiry pb-3 pt-3'>
              <h2 className='header-style'>CONTACT US : </h2>
              <div className='enquiry-form'>
                <form id='contactForm' ref={form} onSubmit={handleSubmit}>
                  <div className='form-group mb-1'>
                    <label htmlFor='fname'> Full Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='fname'
                      name='from_name'
                      aria-describedby='emailHelp'
                      placeholder='Enter Your Full  Name'
                    />
                    {/* <small className='text-danger font-weight-bold' id='nameError'>
                  Please enter your Full name
                </small> */}
                  </div>
                  <div className='form-group mb-1'>
                    <label htmlFor='email'> Email</label>
                    <input
                      type='text'
                      className='form-control'
                      id='email'
                      name='from_email'
                      aria-describedby='emailHelp'
                      placeholder='Enter Your Email Address'
                    />
                    {/* <small className='text-danger font-weight-bold' id='emailError'>
                  Please Enter Your Valid Email
                </small> */}
                  </div>
                  <div className='form-group mb-1'>
                    <label htmlFor='mobile'> Contact No</label>
                    <input
                      type='text'
                      className='form-control'
                      id='mobile'
                      name='from_subject'
                      aria-describedby='emailHelp'
                      placeholder='Enter Contact No'
                    />
                    {/* <small
                  className='text-danger font-weight-bold'
                  id='mobileError'></small> */}
                  </div>
                  <div className='form-group mb-1'>
                    <label htmlFor='Description'>Requirement</label>
                    <textarea
                      className='form-control'
                      id='description'
                      name='message'
                      rows={3}
                      placeholder='Enter Your Requirement'></textarea>
                  </div>
                  <button
                    type='submit'
                    id='submitBtn'
                    className='btn btn-primary mt-3'
                    style={{ width: '100%' }}
                    // onClick={() => validateSubmitForm}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
