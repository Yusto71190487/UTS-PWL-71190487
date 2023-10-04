import React from "react";
import NavbarNav from "./NavbarNav";
import Sidebar from "./Sidebar";
import pictures from "../assets/images/lg.png";
import Src from "./Src";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

import api from "../api/index";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchDataProducts = async () => {
    await api.get("/api/products").then((response) => {
      setProducts(response.data.data.data);
    });
  };

  useEffect(() => {
    fetchDataProducts();
  }, []);

  return (
    <div>
      <Src />
      <NavbarNav image={pictures} />
      <Sidebar />
      <Container>
        <Row>
          {products.length > 0 ? (
            products.map((product, index) => (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={product.gambar}
                    alt={product.nama}
                  />
                  <Card.Body>
                    <Card.Title>{product.nama}</Card.Title>
                    <Card.Text>{product.harga}</Card.Text>
                    <Button variant="primary">Order Sekarang</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div>Data Belum Tersedia</div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
