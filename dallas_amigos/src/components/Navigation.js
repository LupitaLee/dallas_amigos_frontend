

import React, { Component } from 'react'
import {Navbar, Container, Nav,FormControl,Button,Form} from "react-bootstrap";
import SearchPage from './SearchPage';
// import { MDBCol } from "mdbreact";


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
                 {/* <Nav.Link href="/">Home</Nav.Link> */}
                 <Nav.Link href="/about">About</Nav.Link>
                 <Nav.Link href="/categories">Category</Nav.Link>
                 {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"> */}
             {/* <NavDropdown.Item href="/categories">Category</NavDropdown.Item> */}
                  {/* <NavDropdown.Item href="/forms">form post</NavDropdown.Item> */}
                   {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown> */}
            
               </Nav>
               
             </Navbar.Collapse>
             <SearchPage/>
           </Container>
         </Navbar>
                
            </div>
        )
    }
}

