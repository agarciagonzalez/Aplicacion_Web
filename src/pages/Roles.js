import React from "react";
import "../css/RolCRUD.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as AiIcons from 'react-icons/ai';
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

import { InputGroup, FormControl, Form} from "react-bootstrap";

const data = [
  { id: 1, nameRol: "Administrador", description: "", estadoRol: "Activo" },
  { id: 2, nameRol: "Vendedor", description: "", estadoRol: "Inactivo" },
];

class RolCRUD extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nameRol: "",
      description: "",
      estadoRol: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].nameRol = dato.nameRol;
        arreglo[contador].description = dato.description;
        arreglo[contador].estadoRol = dato.estadoRol;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };
  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    valorNuevo.estadoRol = "Activo";
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <Container>
          <br />
          <Button id="btn-5c1e17" onClick={() => this.mostrarModalInsertar()}>
            Crear
          </Button>
          <br />
          <h3 className="text-center">
            <b>Lista de Roles</b>
          </h3>
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                   <td>{dato.nameRol}</td>
                  <td>{dato.estadoRol}</td>
                  <td>
                    <Button
                      id="btn-e3b04b"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>
                    {/* <Button className="fondoicono"><FontAwesomeIcon icon={faEdit}/></Button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div>
              <h3>Editar Rol</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiTwotoneCreditCard />
                </InputGroup.Text>
                <FormControl
                  readOnly
                  type="number"
                  value={this.state.form.id}
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiOutlineUserAdd />
                </InputGroup.Text>
                <FormControl
                  name="nameRol"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.nameRol}
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiTwotoneTags/>
                </InputGroup.Text>
                <Form.Select
                  className="form-control"
                  name="estadoRol"
                  onChange={this.handleChange}
                  value={this.state.form.estadoRol}
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </Form.Select>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiFillEdit/>
                </InputGroup.Text>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.form.description}
              />
              </InputGroup>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              id="btn-e3b04b"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <h3>Crear Rol</h3>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiOutlineUserAdd />
                </InputGroup.Text>
                <FormControl
                  name="nameRol"
                  type="text"
                  placeholder="Nombre del Rol"
                  onChange={this.handleChange}
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiFillEdit/>
                </InputGroup.Text>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Coloque una breve descripción del rol"
                  name="description"
                  onChange={this.handleChange}
                />
              </InputGroup>
            </FormGroup>
            <p className="text-center">
              ¿El rol ya fue creado? <a href="/">Buscar Rol</a>
            </p>
          </ModalBody>

          <ModalFooter>
            <Button 
              id="btn-e3b04b"
              onClick={() => this.insertar()}>
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default RolCRUD;