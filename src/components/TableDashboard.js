import React, { useState } from "react";
import { Table, Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const TableDashboard = (props) => {
  const [ShowEdit, SetEdit] = useState(false);

  const ModalUpdate = () => {
    return (
      <>
        <Container fluid>
          <div className="ModalEdit">
            <Form>
              <h5
                style={{ cursor: "pointer", marginLeft: "350px" }}
                className="text-light"
                onClick={() => SetEdit(false)}
              >
                X
              </h5>
              <h1 className="text-center text-light">Edit Product</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Nama Product</Form.Label>
                <Form.Control type="name" placeholder="Nama Product" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Harga Product</Form.Label>
                <Form.Control type="name" placeholder="Harga Product" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Kategori Product</Form.Label>
                <Form.Control type="name" placeholder="Kategori Product" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Detail Product</Form.Label>
                <Form.Control type="name" placeholder="Detail Product" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Gambar Product</Form.Label>
          <Form.Control
            type="file"
            placeholder="Gambar Product"
           />
           </Form.Group>
              

              <Button style={{ marginLeft:"270px" }} className="btn btn-warning" type="submit">
                UBAH
              </Button>
            </Form>
          </div>
        </Container>
      </>
    );
  };

  return (
    <Container>
      <Button className="mt-4 text-white" variant="warning">
        <Link to="/update" className="text-decoration-none text-light">
          <strong>UPDATE +</strong>
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
            <tr>
              <td>1</td>
              <td>Celana Levist</td>
              <td>Rp 500.000</td>
              <td>Jeans Pria</td>
              <td>celana levist original</td>
              <td>
                <img
                  src={props.image}
                  style={{ width: "78px", height: "51px" }}
                />
              </td>
              <td>
                <a onClick={() => SetEdit(true)} className="text-warning">
                  <FontAwesomeIcon style={{ height:"30px", cursor:"pointer" }} icon={faPenToSquare}></FontAwesomeIcon>
                </a>

                <a className="text-danger" href="">
                  <FontAwesomeIcon style={{ height:"30px", marginLeft:"20px" }}icon={faTrash}></FontAwesomeIcon>
                </a>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
      {ShowEdit && <ModalUpdate />}
    </Container>
  );
};

export default TableDashboard;
