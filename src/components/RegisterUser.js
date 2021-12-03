import React from "react";
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valorInput: "",
      valorTextarea: "",
      valorSelect: "bogota",
      valorMultipleSelect: [],
      auxVMSelect: "gato",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // console.log(e);
    console.log(`El input recibido es: ${this.state.valorInput}`);
    console.log(
      `La información de la caja de texto es: ${this.state.valorTextarea}`
    );
    console.log(`Valor del selector: ${this.state.valorSelect}`);
    console.log(
      `Valor del selector multiple: ${this.state.valorMultipleSelect}`
    );
    e.preventDefault();
  }

  handleChange(e) {
    if (e.target.name === "campo") {
      this.setState({
        valorInput: e.target.value,
      });
    }
    if (e.target.name === "caja") {
      this.setState({
        valorTextarea: e.target.value,
      });
    }
    if (e.target.name === "selector") {
      this.setState({
        valorSelect: e.target.value,
      });
    }
    if (e.target.name === "selectorMultiple") {
      this.setState((state) => {
        state.auxVMSelect = e.target.value;
        const valorMultipleSelect = state.valorMultipleSelect.concat(
          e.target.value
        );
        return {
          valorMultipleSelect,
          auxVMSelect: "",
        };
      });
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label for="nombre" sm={3}>
            Nombre(*)
          </Label>
          <Col sm={9}>
            <Input
              id="id_nombre"
              name="nombre"
              placeholder="Ingrese su nombre"
              type="text"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="apellido" sm={3}>
            Apellido(*)
          </Label>
          <Col sm={9}>
            <Input
              id="id_apellido"
              name="apellido"
              placeholder="Ingrese su apellido"
              type="text"
            />
          </Col>
        </FormGroup>

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
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="genero" sm={3}>
            Género
          </Label>
          <Col sm={9}>
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
          <Label for="celular" sm={3}>
            Celular(*)
          </Label>
          <Col sm={9}>
            <Input
              id="id_celular"
              name="celular"
              placeholder="Ingrese  No de Celular"
              type="number"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="ciudad" sm={3}>
            Ciudad
          </Label>
          <Col sm={9}>
            <Input
              id="id_ciudad"
              name="ciudad"
              placeholder="Ingrese Ciudad de Residencia"
              type="text"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="direccion" sm={3}>
            Direccion
          </Label>
          <Col sm={9}>
            <Input
              id="id_direccion"
              name="direccion"
              placeholder="Ingrese Direccion de Residencia"
              type="text"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="fcumple" sm={3}>
            Fecha Nacimiento(*)
          </Label>
          <Col sm={9}>
            <Input
              id="id_fcumple"
              name="fcumple"
              placeholder="Ingrese Fecha Nacimiento"
              type="date"
            />
          </Col>
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
    );
  }
}

export default Formulario;
