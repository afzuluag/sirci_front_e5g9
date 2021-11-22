import React, { Fragment, useState } from "react";
import { Button } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FormRegisterUser from "./RegisterUser";
import "./Init.css";

function Init() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function handleClick(e) {
    e.preventDefault();
    console.log("Click en Olvido la Clave");
    //ReactDOM.render(RegistroUser, document.getElementById("root"));
    //<RegistroUser />;
  }

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
          <Button color="dark" id="login">
            Ingresar
          </Button>{" "}
          <Button color="dark" id="Register" onClick={toggle}>
            Registro
          </Button>{" "}
          <Button color="dark" id="Cartelera">
            Ir a Cartelera
          </Button>{" "}
          <div>
            <span class="text-span">
              <a onClick={handleClick}>¿Olvido la Clave?</a>
            </span>
          </div>
        </div>
      </div>

      <div>
        <Modal size="lg" isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>SIRCi - Registro de Usuario</ModalHeader>
          <ModalBody style={{ height: "75vh" }}>
            <FormRegisterUser />
          </ModalBody>

          <ModalFooter>
            <Button color="success" onClick={toggle}>
              CERRAR{" "}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Fragment>
  );
}

export default Init;
