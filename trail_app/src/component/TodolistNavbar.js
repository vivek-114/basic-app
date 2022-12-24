import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TodolistNavbar.css'

function TodolistNavbar (){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Navbar.Brand href="#home">ToDo List</Navbar.Brand>
                        <Nav.Link href="/lists">LISTS</Nav.Link>
                        <Nav.Link href="#users">Users</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default TodolistNavbar;