import React, {useState} from "react";
import {Container, Row, Col, Button, Form} from "react-bootstrap";
import axios from "../../Services/base.service";
import LoginImg from '../../../assets/images/login.png';
import Register from '../../../assets/images/icon-register.png'
import {Link, useHistory} from "react-router-dom";
import './style.css';

const Login = () => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mess, setMess] = useState("");
  const [showLogin, setShowLogin] = useState(true)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = {
        username: username,
        password: password,
      };
      const response = await axios.post("/login", data);
      localStorage.setItem("token", response.data.token);
      if (response.data.admin === 1) {
        window.location.href = "/dashboard";
      } else window.location.reload();
    } catch (err) {
      setMess(err.response.data.message);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = {
        username: username,
        password: password,
        patient_name: patientName,
        email: email,
        phone: phone
      };
      const response = await axios.post("/register", data);
      if (response.status === 201) {
        let seconds = 5;
        setInterval(() => {
          seconds--
          setMess(`Create Success !!! Redirect to login page after ${seconds} seconds`)
          if (seconds === 0) {
            window.location.href = "/";
          }
        }, 1000)
      }
    } catch (err) {
      setMess(err.response.data.message);
    }
  }
  const handleFormCreateUser = () => {
    setShowLogin(false)
  }
  const handleFormLogin = () => {
    setShowLogin(true)
  }
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={2}></Col>
          <Col xs={12} md={8}>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
              <>
                {showLogin ?
                  <Form onSubmit={handleLogin}>
                    <h2 style={{fontWeight: "bold", color: "#17d2bb"}} className="style-color mb-2">Medical Portal</h2>
                    <div className="logo" style={{marginBottom: "20px"}}>
                      <img className="img-login" src={LoginImg} style={{width: "280px", height: "330px"}}/>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasic">
                      <Form.Label>User-name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter user-name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" hidden={true}>
                      <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    <p className="err-msg">{mess} </p>
                    <Button className="btn-submit" type="submit">
                      Login
                    </Button>
                    <div style={{marginTop: "20px", textAlign: "center"}} className="register-login">
                      Don’t have an account ?
                      <div style={{color: "blue"}} className="btn" onClick={handleFormCreateUser}>
                        Create an account
                      </div>
                    </div>
                  </Form> :
                  <Form onSubmit={handleRegister}>
                    <h1 style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#17d2bb",
                      marginBottom: "30px"
                    }}>REGISTER</h1>
                    <Form.Group className="mb-3" controlId="formBasic">
                      <Form.Label>User-name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter user-name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasic">
                      <Form.Label>Full name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter full-name"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasic">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasic">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasic">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    {/*<Form.Group className="mb-3" controlId="formBasic">*/}
                    {/*    <Form.Label>Confirm Password</Form.Label>*/}
                    {/*    <Form.Control*/}
                    {/*        required*/}
                    {/*        type="password"*/}
                    {/*        placeholder="Confirm Password"*/}
                    {/*        value={confirmPassword}*/}
                    {/*        onChange={(e) => setConfirmPassword(e.target.value)}*/}
                    {/*    />*/}
                    {/*</Form.Group>*/}
                    <p className="err-msg">{mess} </p>
                    <Button className="btn-submit" type="submit">
                      Register
                    </Button>
                    <div style={{marginTop: "20px", textAlign: "center"}} className="register-login">
                      Already have an account?
                      <div style={{color: "blue"}} className="btn" onClick={handleFormLogin}>
                        Login
                      </div>
                    </div>
                  </Form>
                }
              </>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
