import React, { Fragment, useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';
//import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FormRegisterUser from "./RegisterUser";
import GenericModal from "./GenericModal";
import "./Init.css";
import Login from "./Login";

function Init() {
  const navigate = useNavigate();
  //const [logged, setLogged] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  
  const toggle = () => {(setModal(!modal))};
  const toggleLogin = () => {(setModalLogin(!modalLogin))};
  
  function handleClick(e) {
    e.preventDefault();
    
    switch (e.target.id) {
      case 'Login':
        if (localStorage.getItem("jwt")&&(localStorage.getItem("jwt")!=='undefined')){
          localStorage.removeItem("jwt");
          localStorage.removeItem("userlogged");
          localStorage.removeItem("admin");
          navigate( "/", {
            replace: true
          });
        }
        else{
          setModalLogin(!modalLogin);
        }
        break;

      case 'Olvido':

        console.log("Click en Olvido la Clave");
      break;

      case 'Register':
        
        setModal(!modal);
        break;   

      default:
        break;
    }

  }

  return (
    <Fragment>
      <div class="container">
        <div class="text-h1">
          <h1>Bienvenido</h1>
          <h4>{localStorage.getItem("userlogged")}</h4>
        </div>
        <div class="text-h2">
          <h3>Sistema de Informacion de Reservas de Cine - SIRCi </h3>
        </div>
        <div class="buttons">
          <Button color="dark" id="Login" onClick={handleClick}>
            {((localStorage.getItem("jwt"))&&((localStorage.getItem("jwt")!=='undefined'))?"Salir":"Ingresar")}
          </Button>{" "}
          <Button color="dark" id="Register" onClick={handleClick}>
            Registro
          </Button>{" "}
          <Button color="dark" id="Cartelera">
            Ir a Cartelera
          </Button>{" "}
          <div>
            <span class="text-span">
              <a href="#" id="Olvido" onClick={handleClick}>¿Olvido la Clave?</a>
            </span>
          </div>
        </div>
      </div>

      <div>
        <GenericModal toggle={toggle} modal={modal} tittle="SIRCi - Registro de Usuario" height="75vh" scroll="auto" >
          <FormRegisterUser />
        </GenericModal>
      </div>


      <div>
        <GenericModal toggle={toggleLogin} modal={modalLogin} tittle="SIRCi - Login de Usuario" height="35vh" >
          <Login />
        </GenericModal>
      </div>
    </Fragment>
  );
}

export default Init;
