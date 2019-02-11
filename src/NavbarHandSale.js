import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavbarHandSale extends React.Component {
    render() {
      return (
        <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">HandSale</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Venta</Nav.Link>
              <Nav.Link href="#pricing">Pedidos</Nav.Link>
              <Nav.Link href="#pricing">Productos</Nav.Link>
              <Nav.Link href="#pricing">Proovedores</Nav.Link>
              <Nav.Link href="#pricing">Clientes</Nav.Link>
              <Nav.Link href="#pricing">Usuarios</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
                
      </div>
      
      );
    }
  }


export default NavbarHandSale;