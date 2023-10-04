import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavbarDashboard = (props) => {
  return (
    <div className="myNav">
      <Navbar data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={props.image} style={{ width: "100px" }} alt="" />
          </Navbar.Brand>
          <h5 className="text-white">Selamat Malam</h5>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarDashboard;
