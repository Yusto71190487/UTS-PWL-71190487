import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import Swal from "sweetalert2";


const handleClick = () =>{
  Swal.fire({
    title: 'Levist Original',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}


const Product = (props) => {
  return (
   
    <Container>
    <div className="myProduct">
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Button onClick={handleClick} style={{ backgroundColor:"#E31E26" }}>Cek Detail</Button>
        </Card.Body>
      </Card>
    </div>
    </Container>
  );
};

export default Product;
