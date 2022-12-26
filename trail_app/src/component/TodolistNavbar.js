import axios from "axios";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TodolistNavbar.css'

function TodolistNavbar (props){
    // let navBar;
    // debugger;
    // if (props.login_status.length > 0 && props.login_status === "LOGGED_IN") {
    //     const navBar = <Container> <Nav className="me-auto"> <Navbar.Brand href="/dashboard">ToDo List</Navbar.Brand><Nav.Link href="/lists">LISTS</Nav.Link> <Nav.Link href="/users">USERS</Nav.Link> </Nav> </Container>;
    // } else {
    //     const navBar = <Container> <Nav className="me-auto"> <Navbar.Brand href="/dashboard">ToDo List</Navbar.Brand> <Nav.Link href="/login">LOGIN</Nav.Link><Nav.Link href="/registrations">REGISTER</Nav.Link> </Nav></Container>;
    // }
    const handleLogoutClick=(event)=>{
        debugger;
        axios.get("http://localhost:3001/clear_session",{withCredentials: true})
        .then(response =>{
            console.log("response is", response);
        })
        .catch(error => {
            console.log("error is", error);
        })
    }
    return(
        <>
            <Navbar bg="dark" variant="dark">
                {props.login_status.length > 0 && props.login_status === "LOGGED_IN" ?
                    <Container> <Nav className="me-auto"> <Navbar.Brand href="/dashboard">ToDo List</Navbar.Brand><Nav.Link href="/lists">LISTS</Nav.Link> <Nav.Link href="/users">USERS</Nav.Link> <Nav.Link href="#logout" onClick={handleLogoutClick}>LOG OUT</Nav.Link> </Nav> </Container> :
                    <Container> <Nav className="me-auto"> <Navbar.Brand href="/login">ToDo List</Navbar.Brand> <Nav.Link href="/login">LOGIN</Nav.Link><Nav.Link href="/registrations">REGISTER</Nav.Link> </Nav></Container>
                }
                {/* <Container>
                    <Nav className="me-auto">
                        <Navbar.Brand href="/dashboard">ToDo List</Navbar.Brand>
                        <Nav.Link href="/lists">LISTS</Nav.Link>
                        <Nav.Link href="/users">USERS</Nav.Link>
                    </Nav>
                </Container> */}
            </Navbar>
        </>
    );
}

export default TodolistNavbar;