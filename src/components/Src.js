import { Nav, Navbar, Container, Form, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Src = () => {
  return (
    <div className="myNav">
      <Navbar data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="ml-auto">
            <Form className="d-flex" style={{ width: "500px" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{ backgroundColor: "#E31E26" }}>
                {" "}
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Src;
