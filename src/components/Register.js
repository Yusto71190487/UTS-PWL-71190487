import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    await api
      .post("/api/users", formData)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
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
    <div className="MyRgform">
      <Form onSubmit={register}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <div className="alert alert-danger mt-2">{errors.name[0]}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <div className="alert alert-danger mt-2">{errors.email[0]}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className="alert alert-danger mt-2">{errors.password[0]}</div>
          )}
        </Form.Group>

        <Button className="btn btn-warning bnt mb-3" type="submit">
          REGISTRASI
        </Button>
      </Form>
    </div>
  );
};

export default Register;
