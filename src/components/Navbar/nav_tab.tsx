/** @format */

import React from 'react';

import { Offcanvas, Navbar, Nav, Container } from 'react-bootstrap';
import './nav-tab.css';
import logo from '../../Assets/mainLogo.png';
import { Link } from 'react-router-dom';

const nav_tab = () => {
  return (
    <>
      <section>
        {['md'].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className='bg-transparent '
            collapseOnSelect>
            <Container fluid>
              <Navbar.Brand>
                <Link to='/'>
                  <img src={logo} alt='param logo' className='ing-fluid' />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement='end'>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img
                      src={logo}
                      alt='param logo'
                      className='ing-fluid'
                      width='150px'
                    />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body aria-label='Close'>
                  <Nav className='justify-content-end flex-grow-1 pe-2 fs-2'>
                    <Nav.Link as={Link} to='/' eventKey='1'>
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} to='/About' eventKey='2'>
                      About Us
                    </Nav.Link>
                    {/* <NavDropdown
                      title='Projects'
                      id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item
                        as={Link}
                        to='/Project_completed'
                        eventKey='3'>
                        Completed projects
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to='/Project_OnGoing'
                        eventKey='4'>
                        Ongoing Projects
                      </NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link as={Link} to='/Products' eventKey='3'>
                      Products
                    </Nav.Link>
                    <Nav.Link as={Link} to='/Contact' eventKey='4'>
                      Contact Us
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
                <div className='nav-contact'>
                  <h1>
                    <img
                      src={require('../../Assets/phone.png')}
                      className='img-fluid'
                      width='40px mr-3'
                      alt=''
                    />{' '}
                    9586489007 / 9638209447
                  </h1>
                </div>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </section>
    </>
  );
};

export default nav_tab;
