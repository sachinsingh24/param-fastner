/** @format */

import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section>
      <div className='container'>
        <div className='contact-head m-auto'>
          <img
            src={require('../../Assets/Param Fastner Logo.png')}
            alt='logo'
            width={'300px'}
          />
        </div>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='contact-head-tag'>
              <h1>Address</h1>
              <h4>
                A-37, Shivam Estate, Ujala Circler, S.G. Highway Rd, Sarkhej,
                Ahmedabad,Gujarat-380010.
              </h4>
              <h3>contact no : 9586489007 / 9638209447</h3>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='contact-head-tag'>
              <h1>Location</h1>
              <div className='border border-primary'>
                <iframe
                  title='map'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.162057309058!2d72.4907221!3d22.9810675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bd71a01a26f%3A0x22d53b6fea067c3!2sParam%20Fasteners!5e0!3m2!1sen!2sin!4v1679687730577!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
                  width='100%'
                  height='350px'></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
