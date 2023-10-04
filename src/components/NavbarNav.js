import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";


const NavbarNav = (props) => {
  return (
    <div className='myNav'>
     <Navbar data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home"> <img src={props.image} style={{width:'100px'}}/> </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link><Link to="/home" className="text-decoration-none text-light">Home</Link>  </Nav.Link>
            <Nav.Link href="#features">Compani Informasi</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link><Link to="/login" className="text-decoration-none text-light">Login</Link></Nav.Link>
            <Nav.Link><Link to="/register" className="text-decoration-none text-light">Signup</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}



export default NavbarNav