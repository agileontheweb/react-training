import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar{
    background-color: #222;
  }

  a,
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #fff;

    &:hover{
      color: red;
    }
  }
`;

export const NavigationBar = (props) => (

  <Styles>
    <Navbar expand="sm" className="navbar-dark">
      <Navbar.Brand href="/">Code life</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <NavLink to="services" className="nav-link">
              Services
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="about" className="nav-link">
              About
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="contact" className="nav-link">
              Contact
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
