import {
  Nav,
  Navbar,
  Container,

  Form,
  Button,
} from "react-bootstrap";
const Src = () => {
  return (
    <div className="myNav">
      <Navbar data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="ml-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Src;
