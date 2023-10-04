import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import api from "../api/index";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [detail, setDetail] = useState("");
  const [gambar, setGambar] = useState("");
  const [kategori, setKategori] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setGambar(e.target.files[0]);
  };

  const storeProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nama", nama);
    formData.append("harga", harga);
    formData.append("kategori", kategori);
    formData.append("detail", detail);
    formData.append("gambar", gambar);

    await api
      .post("/api/products", formData)
      .then(() => {
        navigate("/products");
      })
      .catch((error) => {
        // Periksa apakah error.response tidak undefined
        if (error.response && error.response.data) {
          // Jika tidak undefined, setErrors dengan data dari response
          setErrors(error.response.data);
        } else {
          // Jika error.response atau error.response.data undefined, tangani kasus lainnya di sini
          // Misalnya, setErrors dengan pesan kesalahan umum
          setErrors("Terjadi kesalahan saat memproses permintaan.");
        }
      });
  };

  return (
    <div className="MyUpform">
      <Form onSubmit={storeProduct}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Nama Product</Form.Label>
          <Form.Control
            type="name"
            placeholder="Nama Product"
            onChange={(e) => setNama(e.target.value)}
          />
          {errors.nama && (
            <div className="alert alert-danger mt-2">{errors.nama[0]}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Gambar Product</Form.Label>
          <Form.Control
            type="file"
            placeholder="Gambar Product"
            onChange={handleFileChange}
          />
          {errors.gambar && (
            <div className="alert alert-danger mt-2">{errors.image[0]}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Harga Product</Form.Label>
          <Form.Control
            type="name"
            placeholder="Harga Product"
            onChange={(e) => setHarga(e.target.value)}
          />
          {errors.harga && (
            <div className="alert alert-danger mt-2">{errors.harga[0]}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Categori Product</Form.Label>
          <Form.Control
            type="name"
            placeholder="Kategori Product"
            onChange={(e) => setKategori(e.target.value)}
          />
          {errors.kategori && (
            <div className="alert alert-danger mt-2">{errors.kategori[0]}</div>
          )}
        </Form.Group>
        <Form.Text className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Deskripsi Product</Form.Label>
          <Form.Control
            style={{ height: "124px" }}
            type="name"
            placeholder="Detail Product"
            onChange={(e) => setDetail(e.target.value)}
          />
          {errors.detail && (
            <div className="alert alert-danger mt-2">{errors.detail[0]}</div>
          )}
        </Form.Text>

        <Button className="btn btn-warning bnt mt-4" type="submit">
          Tambah Data
        </Button>
      </Form>
    </div>
  );
};

export default Update;
