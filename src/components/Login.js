import React from "react";
//import { useNavigate } from 'react-router-dom';
//import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";
import axios from "axios";
//const jwt = require("jsonwebtoken");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_email: "",
      id_psw: ""
  
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

    const userData = { 
      email: this.state.id_email, 
      clave: this.state.id_psw
    }
    axios.post( `http://127.0.0.1:4000/usuario/login`, userData)
    .then((res) =>{
      
      const {token} = res.data;
      const {nombre}=res.data;
      console.log(nombre);
      const {mensaje}=res.data;
      const {admin}=res.data;
      localStorage.setItem("jwt", token);
      localStorage.setItem("userlogged",nombre);
      localStorage.setItem("admin",admin);
      if(typeof nombre === "undefined"){
        alert(mensaje + " Intente de nuevo");
      }
      else{
        console.log(this);
      }
      
      
    
    })
    .catch((err) => {
      console.log("Error en la promesa ",err);
    });
    e.preventDefault();

  }

  handleChange(e) {
    //console.log(e.target);
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label for="email" sm={3}>
            Email(*)
          </Label>
          <Col sm={9}>
            <Input
              id="id_email"
              name="email"
              placeholder="Ingrese su Email"
              type="email"
              onChange={this.handleChange}
              value={this.state.id_email}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="psw" sm={3}>
            Password(*)
          </Label>
          <Col sm={9}>
            <Input
              id="id_psw"
              name="psw"
              placeholder="Ingrese su Password"
              type="password"
              onChange={this.handleChange}
              value={this.state.id_psw}
            />
          </Col>
        </FormGroup>

        <div class="class-botones">
          <FormGroup>
            <Button color="dark">Login</Button>
          </FormGroup>
        </div>

        <div class="text-form">
          <ul>
            <span>(*) Campos Obligatorios</span>
          </ul>
        </div>
      </Form>
    );
  }
}

export default Login;
