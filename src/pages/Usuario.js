import React from 'react'
import "../css/UsuarioCRUD.css"
import "bootstrap/dist/css/bootstrap.min.css";
import * as AiIcons from "react-icons/ai";

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

import { InputGroup, FormControl, Form } from "react-bootstrap";

const data = [
    { id: 1, cedula: 123, usuario: "Andrés García", correo: "agarcia@gmail.com", celular: "3245678435", estado: "Autorizado", rol: "Vendedor" },
    { id: 2, cedula: 456, usuario: "Alvaro Perez", correo: "alvaro.o@gmail.com", celular: "3102546789", estado: "Autorizado", rol: "Gerente" },
    { id: 3, cedula: 789, usuario: "Daniela Gonzalez", correo: "dg198@gmail.com", celular: "3126789043", estado: "No Autorizado", rol: "Administrador" },
   ];


class Usuario extends React.Component {
         state = { 
            data: data,
            modalActualizar: false,
            modalInsertar: false,

            form: {
                id: "",
                cedula: "",
                usuario: "",
                correo: "",
                celular: "",
                estado: "",
                rol: "",
              },
         }
    

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
            arreglo[contador].cedula = dato.cedula;
            arreglo[contador].usuario = dato.usuario;
            arreglo[contador].correo = dato.correo;
            arreglo[contador].celular = dato.celular;
            arreglo[contador].rol = dato.rol;
            arreglo[contador].estado = dato.estado;
          }
          contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
      };
    
      eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar al usuario con cedula No "+dato.cedula);
        if (opcion === true) {
          var contador = 0;
          var arreglo = this.state.data;
          arreglo.map((registro) => {
            if (dato.id === registro.id) {
              arreglo.splice(contador, 1);
            }
            contador++;
          });
          this.setState({ data: arreglo, modalActualizar: false });
        }
      };
    
      insertar= ()=>{
        var valorNuevo= {...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista= this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
      }
    
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
                <Button id="bot-elim" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
                <br />
                <h3 className="text-center">
                <b>Lista de Usuarios</b>
                </h3>
                <br />
                <Table>
                    <thead>
                    <tr>
                        <th >ID</th>
                        <th >Usuario</th>
                        <th >Correo Electrónico</th>
                        <th >Rol</th>
                        <th >Estado</th>
                        <th >Acción</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.data.map((dato) => (
                        <tr key={dato.id}>
                        <td>{dato.cedula}</td>
                        <td>{dato.usuario}</td>
                        <td>{dato.correo}</td>
                        <td>{dato.rol}</td>
                        <td>{dato.estado}</td>
                        <td>
                            <Button
                            id = "bot-edit"
                            onClick={() => this.mostrarModalActualizar(dato)}
                            >
                            Editar
                            </Button>{" "}
                            <Button id = "bot-elim" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Container>
       
   


            <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
            <div><h3 className="text-center">Editar Usuario</h3>
            <p className="text-center">Diligencie cuidadosamente todos los campos para modificar usuario</p></div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiTwotoneCreditCard />
                </InputGroup.Text>
                <FormControl
                  className="form-control"
                  name="cedula"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.cedula}
                />
              </InputGroup>
                </FormGroup>
                
                <FormGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiOutlineUser />
                </InputGroup.Text>
                <FormControl
                    className="form-control"
                    name="usuario"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.usuario}
                    />
                </InputGroup>
                </FormGroup>
                
                <FormGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiTwotoneMail/>
                </InputGroup.Text>
                <FormControl
                    className="form-control"
                    name="correo"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.correo}
                />
                </InputGroup>
                </FormGroup>

                <FormGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiTwotonePhone />
                </InputGroup.Text>
                <FormControl
                    className="form-control"
                    name="celular"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.celular}
                />
                </InputGroup>
                </FormGroup>

                <FormGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiFillContacts/>
                </InputGroup.Text>
                <Form.Select
                className="form-control"
                name="rol"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.rol}>
                <option selected=""> Seleccione el tipo de usuario</option>
                <option>Vendedor</option>
                <option>Operario</option>
                <option>Administrador</option>
                <option>Gerente comercial</option>
                <option>Ejecutivo</option>
                <option>Director</option>   
                </Form.Select>
                </InputGroup>
                </FormGroup>

                <FormGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiOutlineCheckSquare/>
                </InputGroup.Text>
                <Form.Select
                className="form-control"
                name="estado"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.estado}>
                <option selected=""> Seleccione el estado del usuario</option>
                <option>Pendiente de autorización</option>
                <option>Autorizado</option>
                <option>No autorizado</option>  
                </Form.Select>
                </InputGroup>
                </FormGroup>   
            </ModalBody>

            <ModalFooter>
                <Button
                id = "bot-edit"
                onClick={() => this.editar(this.state.form)}
                >
                Editar
                </Button>
                <Button
                color="danger"
                onClick={() => this.cerrarModalActualizar()}
                >
                Cancelar
                </Button>
            </ModalFooter>
            </Modal>

            




            <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
           <div><h3 className="text-center">Crear nuevo Usuario</h3>
            <p className="text-center">Diligencie cuidadosamente todos los campos para crear un nuevo usuario</p></div>
            </ModalHeader>    

            <ModalBody>
            
            <FormGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiTwotoneCreditCard />
                </InputGroup.Text>
                <FormControl
                className="form-control"
                name="cedula"
                type="text"
                placeholder="Cedula"
                onChange={this.handleChange}
              />
            </InputGroup>
            </FormGroup>
            
            <FormGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiOutlineUser />
                </InputGroup.Text>
                <FormControl
                className="form-control"
                name="usuario"
                type="text"
                placeholder="Usuario"
                onChange={this.handleChange}
              />
                </InputGroup>
            </FormGroup>
            
            <FormGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiTwotoneMail/>
                </InputGroup.Text>
                <FormControl
                className="form-control"
                name="correo"
                type="text"
                placeholder="Correo Electronico"
                onChange={this.handleChange}
              />
                </InputGroup>
            </FormGroup>
            
            <FormGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiTwotonePhone/>
                </InputGroup.Text>
                <FormControl
                className="form-control"
                name="celular"
                type="text"
                placeholder="Número Celular"
                onChange={this.handleChange}
              />
                </InputGroup>
            </FormGroup>


            <FormGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiFillContacts/>
                </InputGroup.Text>
                <Form.Select
            className="form-control"
            name="rol"
            type="text"
            placeholder="rol"
            onChange={this.handleChange}>
                <option selected=""> Seleccione el tipo de usuario</option>
                <option>Vendedor</option>
                <option>Operario</option>
                <option>Administrador</option>
                <option>Gerente comercial</option>
                <option>Ejecutivo</option>
                <option>Director</option>  
                </Form.Select>
                </InputGroup>
                
            </FormGroup>


            <FormGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiOutlineCheckSquare/>
                </InputGroup.Text>
                <Form.Select
            className="form-control"
            name="estado"
            type="text"
            placeholder="estado"
            onChange={this.handleChange}>
                <option selected="">Seleccione el estado del usuario</option>
                <option>Pendiente de autorización</option>
                <option>Autorizado</option>
                <option>No autorizado</option>
                </Form.Select>
                </InputGroup>
            </FormGroup>

            <FormGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiFillLock/>
                </InputGroup.Text>
                <FormControl
                className="form-control"
                name="contraseña1"
                type="text"
                placeholder="Ingresar contraseña"
                
              />
                </InputGroup>
            </FormGroup> 


            <FormGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiFillLock/>
                </InputGroup.Text>
                <FormControl
                className="form-control"
                name="contraseña2"
                type="text"
                placeholder="Confirmar contraseña"
                
              />
                </InputGroup>
            </FormGroup>       



          </ModalBody>

          <ModalFooter>
            <Button
              id = "bot-edit"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              color="danger"
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
 
export default Usuario;


