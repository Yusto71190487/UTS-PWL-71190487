import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

const Login = (props) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const handleLogin = async () => {
    await api
      .post("/api/users", {
        email: email,
        password: password,
      })
      .then((response) => {
        setToken(response.data.token);
        setUser(response.data.user);
        navigate("/dashboard");
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
    <div className="MyLg">
      <div>
        <img className="mb-3" src={props.image} />
      </div>
      <Form onSubmit={handleLogin}>
        {errors.email &&
          errors.password(
            <div className="alert alert-danger">
              {errors.email[0] && errors.password[0]}
            </div>
          )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="btn-block" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-center text-white">
        belum punya aku ? silahkan <Link to="/register">Daftar</Link>
      </p>
    </div>
  );
};

export default Login;
