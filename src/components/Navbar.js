import React from "react";
import './Navbar.scss'; 
import Logo from "../assets/logo.png";
import { Nav, Navbar, Container, Image } from "react-bootstrap";

export default function Navigation () {
    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <Image className="logo" src={Logo} />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="nav_link" >Home</Nav.Link>
                    <Nav.Link className="nav_link">Sobre mim</Nav.Link>
                    <Nav.Link className="nav_link">Skills</Nav.Link>
                    <Nav.Link className="nav_link">Portfólio</Nav.Link>
                    <Nav.Link className="nav_link">Serviços</Nav.Link>
                    <Nav.Link className="nav_link">Contato</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}