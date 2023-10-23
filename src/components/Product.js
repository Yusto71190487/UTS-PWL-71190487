
import React, { useState } from "react";
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import banner from "../assets/images/product.png";

const Product = (props) => {
  
const [showModal, setShowModal] = useState(false);

const MyModal = () => {
  return(
    <>
    <div className="myModal"></div>
    <div className="modal-container">
    <h5 style={{ cursor:"pointer", color:"#E31E26", marginLeft:"350px" }}onClick={()=>setShowModal(false)}><strong>X</strong></h5>
    <h4 className="text-center">Detail Product</h4>
     <img className="mb-4" src={props.image}></img>
    
      <h4>Celana Levis't</h4>
      <h4>Rp 500.000</h4>
      <h4>Jeans Pria</h4>
      <p>Celana Levist Original Import</p>
      <Button style={{ backgroundColor:"#E31E26", marginLeft:"270px" }}>Checkoud</Button>
      </div>
    </>
  )
}
  return (
    <div className="myProduct">
  <Container fluid> 
    <Row>
    <Col md={4} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>Celana Levist 501</Card.Title>
          <Card.Text> Rp 500.000</Card.Text>
          <Button onClick={() => setShowModal(true)} style={{ backgroundColor:"#E31E26" }}>Detail Product</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
        <Card.Title>Celana Levist 501</Card.Title>
          <Card.Text> Rp 500.000</Card.Text>
          <Button style={{ backgroundColor:"#E31E26" }}>Detail Product</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
        <Card.Title>Celana Levist 501</Card.Title>
          <Card.Text> Rp 500.000</Card.Text>
          <Button style={{ backgroundColor:"#E31E26" }}>Detail Product</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
        <Card.Title>Celana Levist 501</Card.Title>
          <Card.Text> Rp 500.000</Card.Text>
          <Button style={{ backgroundColor:"#E31E26" }}>Detail Product</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
        <Card.Title>Celana Levist 501</Card.Title>
          <Card.Text> Rp 500.000</Card.Text>
          <Button style={{ backgroundColor:"#E31E26" }}>Detail Product</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
        <Card.Title>Celana Levist 501</Card.Title>
          <Card.Text> Rp 500.000</Card.Text>
          <Button style={{ backgroundColor:"#E31E26" }}>Detail Product</Button>
        </Card.Body>
      </Card>
    </Col>
    </Row>
    {showModal && <MyModal/>}
    </Container>
    </div>
  

  //   {/* <Container>
  //   <div className="myProduct">
  //     <Card>
  //       <Card.Img variant="top" src={props.image} />
  //       <Card.Body>
  //         
  //       </Card.Body>
  //     </Card>
  //   </div>
  //   </Container> */}
   );
};

export default Product;
