import React, { useState, useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../api/index";

const TableDashboard = (props) => {
  const [products, setProducts] = useState([]);

  const fetchDataProducts = async () => {
    await api.get("/api/products").then((response) => {
      setProducts(response.data.data.data);
    });
  };

  useEffect(() => {
    fetchDataProducts();
  }, []);
  const deleteProduct = async (id) => {
    await api.delete(`/api/products/${id}`).then(() => {
      fetchDataProducts();
    });
  };
  return (
    <Container>
      <Button className="mt-4 text-white" variant="warning">
        <Link to="/update" className="text-decoration-none text-light">
          <strong>Tambah Data +</strong>
        </Link>
      </Button>{" "}
      <div className="mt-4 text-center">
        <Table className="mYtable" striped bordered hover variant="light">
          <thead>
            <tr>
              <th className="text-white">#</th>
              <th className="text-white">Nama Product</th>
              <th className="text-white">Harga Product</th>
              <th className="text-white">Categori Product</th>
              <th className="text-white">Detail Product</th>
              <th className="text-white">Gambar</th>
              <th className="text-white">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product, index) => (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.nama}</td>
                  <td>Rp {product.harga}</td>
                  <td>{product.kategori}</td>
                  <td>{product.detail}</td>
                  <td>
                    <img
                      src={product.gambar}
                      style={{ width: "78px", height: "51px" }}
                      alt={product.nama}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colspan="8" className="text-center">
                  <div className="alert alert-danger mb-8">
                    Data belum tersedia!!
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TableDashboard;
