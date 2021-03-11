import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navi() {
  return (
    <div>
      <Navbar collapseOnSelect absolute="top" expand="xl" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Optica Milap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Nosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#Cita">Agenda Tu Cita</Nav.Link>
            <Nav.Link href="#Gafas">Cotiza Tus Gafas</Nav.Link>
            <Nav.Link href="#Lentes">Cotiza Tus Lentes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;