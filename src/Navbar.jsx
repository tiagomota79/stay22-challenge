import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  width: auto;
  height: 80px;
  margin: 15px;
`;

const Title = styled.h1`
  font-size: xx-large;
  color: #243047;
`;

//Very simple Navbar. The only function is to have a link to the initial landing page in the logo, and the title.
class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Link to='/'>
          <Logo src='https://breezy-gallery.imgix.net/42f55f68-37c1-4777-94dd-44896431b7cd/Logo%20blue%201.png' />
        </Link>
        <Title>Never too late to find a Christmas Party!</Title>
      </Nav>
    );
  }
}

export default Navbar;
