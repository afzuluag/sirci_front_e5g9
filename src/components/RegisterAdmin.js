import React from "react";
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";
import "./RegisterAdmin.css";

function RegistroUser() {
  return (
    <>
      <div class="container">
        <Form>
          <div class="text-titulo-form">
            <h3>REGISTRO DE USUARIOS</h3>
          </div>

          <FormGroup row>
            <Label for="nombre" sm={2}>
              Nombre
            </Label>
            <Col sm={10}>
              <Input
                id="id_nombre"
                name="nombre"
                placeholder="Ingrese su nombre"
                type="text"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="apellido" sm={2}>
              Apellido
            </Label>
            <Col sm={10}>
              <Input
                id="id_apellido"
                name="apellido"
                placeholder="Ingrese su apellido"
                type="text"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="email" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                id="id_email"
                name="email"
                placeholder="Ingrese su Email"
                type="email"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="psw" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                id="id_psw"
                name="psw"
                placeholder="Ingrese su Password"
                type="password"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="genero" sm={2}>
              Género
            </Label>
            <Col sm={10}>
              <Input id="id_genero" name="genero" type="select">
                {" "}
                <option>Ninguno</option>
                <option>Masculino</option>
                <option>Femenino</option>
                <option>Otro</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="celular" sm={2}>
              Celular
            </Label>
            <Col sm={10}>
              <Input
                id="id_celular"
                name="celular"
                placeholder="Ingrese  No de Celular"
                type="number"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="ciudad" sm={2}>
              Ciudad
            </Label>
            <Col sm={10}>
              <Input
                id="id_ciudad"
                name="ciudad"
                placeholder="Ingrese Ciudad de Residencia"
                type="text"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="direccion" sm={2}>
              Direccion
            </Label>
            <Col sm={10}>
              <Input
                id="id_direccion"
                name="direccion"
                placeholder="Ingrese Direccion de Residencia"
                type="text"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="fcumple" sm={2}>
              Fecha Nacimiento
            </Label>
            <Col sm={10}>
              <Input
                id="id_fcumple"
                name="fcumple"
                placeholder="Ingrese Fecha Nacimiento"
                type="date"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Input id="id_admin" name="admin" type="checkbox" />{" "}
            <Label for="admin">Administrador</Label>
          </FormGroup>

          <div class="class-botones">
            <FormGroup>
              <Button color="dark">Enviar</Button>
            </FormGroup>
          </div>

          <div class="text-form">
            <ul>
              <span1>(*) Campos Obligatorios</span1>
            </ul>

            <span>
              Estoy de acuerdo con <a href="#">Terminos y Condiciones</a>
              {" - "}
            </span>

            <span>
              ¿Ya tienes una cuenta? <a href="#">Ingresa aqui</a>
            </span>
          </div>
        </Form>
      </div>
    </>
  );
}

export default RegistroUser;
