import React from "react";
import './List.css'
import axios from 'axios';
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import TodolistNavbar from "./TodolistNavbar";

function List(props) {
    const location = useLocation();
    const [inputsData, setInputsData] = useState({title: "",
        description: ""
    });

    const updateFieldValues = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // setInputsData({[name]: value});
        setInputsData(previousState => {
            return { ...previousState, [name]: value}
          });
    }

    const formSubmit = (event) => {
        const {
            title,
            description
        } = inputsData;
        var email = "";
        if (props.logged_in_user.length > 0) {
            email = props.logged_in_user;
        } else {
            email = '';
        }
        axios.post("http://localhost:3001/lists",
        {
            title: title,
            description: description,
            email: email
        },
        {withCredentials: true}
        )
        .then(response => {
            console.log("response is ", response);
        })
        .catch(error => {
            console.log("error is", error);
        });
        // event.preventDefault();
    }

    const textInput = {
        height: "30px",
        width: "350px",
    };

    const textboxInput = {
        height: "50px",
        width: "350px",
        textRendering: "top !important",
        paddingTop: "0px",
        marginTop: "0px",
        textAlign: "top"
    };

    return(
        <form onSubmit={formSubmit}>
            {/* <header> ToDo List </header> */}
            <TodolistNavbar login_status = {props.login_status}/>
            <label>Title:</label>
            <br></br>
            <input
                type = "text"
                name = "title"
                value = {inputsData.title || ""}
                placeholder = "Please Enter Task title" 
                style = {textInput}
                onChange={updateFieldValues}/>
            <br></br>
            <label>Description:</label>
            <br></br>
            <textarea
                name = "description"
                value = {inputsData.description || ""}
                placeholder = "Please Enter Task description"
                style = {textboxInput}
                onChange={updateFieldValues}/>
            <br></br>
            <button type = "submit"> Submit</button>
            <br></br>
            <label> login status: {props.login_status}</label>
        </form>
    );
}

export default List;