import axios from "axios";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TodolistNavbar.css'
import { useState, useEffect } from "react";
import {BrowserRouter as Router, useNavigate} from 'react-router-dom'

function TodolistNavbar (props){
    // let navBar;
    // debugger;
    // if (props.login_status.length > 0 && props.login_status === "LOGGED_IN") {
    //     const navBar = <Container> <Nav className="me-auto"> <Navbar.Brand href="/dashboard">ToDo List</Navbar.Brand><Nav.Link href="/lists">LISTS</Nav.Link> <Nav.Link href="/users">USERS</Nav.Link> </Nav> </Container>;
    // } else {
    //     const navBar = <Container> <Nav className="me-auto"> <Navbar.Brand href="/dashboard">ToDo List</Navbar.Brand> <Nav.Link href="/login">LOGIN</Nav.Link><Nav.Link href="/registrations">REGISTER</Nav.Link> </Nav></Container>;
    // }
    const navigate = useNavigate();
    const [navigateSuccessfulSignOut, setNavigateSuccessfulSignOut] = useState("");
    const handleLogoutClick=(event)=>{
        debugger;
        axios.get("http://localhost:3001/clear_session",{withCredentials: true})
        .then(response =>{
            console.log("response is", response);
            if (response.data.status === "Success") {
                // props.handleSuccessfulAuthorization(response.data.user);
                setNavigateSuccessfulSignOut(response.data);
            }
        })
        .catch(error => {
            console.log("error is", error);
        })
    }

    useEffect(() => {
        if (navigateSuccessfulSignOut.length !== 0){
            navigate("/login", { replace: true , state: navigateSuccessfulSignOut});
        }
    }, [navigateSuccessfulSignOut]);

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