import React from 'react';
import './Header.scss';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand href="/">Audiology</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/cart">
                  <Nav.Link><i className="fas fa-shopping-cart" style={{margin: '2px'}}></i>Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link><i className="fas fa-user" style={{margin: '2px'}}></i>Sign In</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
