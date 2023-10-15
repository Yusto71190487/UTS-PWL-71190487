import React from "react";
import { Card } from "react-bootstrap";

function Hero(props) {
  return (
    <div className="myHero text-center">
      <Card>
        <Card.Img variant="top" src={props.image} />
      </Card>
    </div>
  );
}

export default Hero;
