

import React, { Component } from 'react'
import {Navbar, Container, Nav} from "react-bootstrap";


export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
           <Container>
             <Navbar.Brand href="/">Dallas Amigos</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
         
                 <Nav.Link href="/about">Sobre Nosotros</Nav.Link>
                 <Nav.Link href="/categories">Categorias</Nav.Link>
            
               </Nav>
               
             </Navbar.Collapse>
            
           </Container>
         </Navbar>
                
            </div>
        )
    }
}

