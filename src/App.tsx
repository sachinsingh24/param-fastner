/** @format */

import React from 'react';

import './App.css';

import Navbar from './components/Navbar/nav_tab';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact_Us/Contact';
import Products from './components/Products/Products';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Contact_Us' element={<Contact />} />
        <Route path='Products' element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
