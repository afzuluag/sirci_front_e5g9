import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import "./Init.css";

export function Init() {
  return (
    <Fragment>
      <div class="container">
        <div class="text-h1">
          <h1>Bienvenido</h1>
        </div>
        <div class="text-h2">
          <h3>Sistema de Informacion de Reservas de Cine - SIRCi </h3>
        </div>
        <div class="buttons">
          <Button variant="info" id="login">
            ingresar
          </Button>
          <Button type="submit" id="Register">
            Registro
          </Button>
          <Button type="submit" id="Cartelera">
            Ir a Cartelera
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

/**
<>
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> 
  <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> 
  <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
</>

*/
