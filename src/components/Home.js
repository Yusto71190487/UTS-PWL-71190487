import React from "react";
import NavbarNav from "./NavbarNav";
import Sidebar from "./Sidebar";
import pictures from "../assets/images/lg.png";
import Src from "./Src";
import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product";
import banner from "../assets/images/banner adv.jpg";
import bannerHero from "../assets/images/banner hero home.jpg";
import Hero from "./Hero";
import PaginationCounter from "./PaginationCounter";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { useState, useEffect } from "react";

// import api from "../api/index";

const Home = () => {
  // const [products, setProducts] = useState([]);

  // const fetchDataProducts = async () => {
  //   await api.get("/api/products").then((response) => {
  //     setProducts(response.data.data.data);
  //   });
  // };

  // // useEffect(() => {
  // //   fetchDataProducts();
  // }, []);

  return (
    <div>
      <Src />
      <NavbarNav image={pictures} />
      <Sidebar />

      <div className="row">
          <div className="col-12 text-center my-3" id="tour">
          <Hero image={bannerHero} />
          </div>
        </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3">
            <Product image={banner} />
          </div>
          <div className="col-lg-3">
            <Product image={banner} />
          </div>
          <div className="col-lg-3">
            <Product image={banner} />
          </div>
          <div className="col-lg-3">
            <Product image={banner} />
          </div>
          <div className="col-md-3">
            <Product image={banner} />
          </div>
          <div className="col-md-3">
            <Product image={banner} />
          </div>
          <div className="col-md-3">
            <Product image={banner} />
          </div>
          <div className="col-md-3">
            <Product image={banner} />
          </div>
          <div className="col-md-3">
            <Product image={banner} />
          </div>
          <div className="col-md-3">
            <Product image={banner} />
          </div>
        </div>
      </div>

      <Container>
        <Row>
          {/* {products.length > 0 ? (
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
          )} */}
        </Row>
      </Container>
      <PaginationCounter />
    </div>
  );
};

export default Home;
