import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import {BrowserRouter as Router, useNavigate} from 'react-router-dom'
import TodolistNavbar from './TodolistNavbar'

function Registration(props){

    const navigate = useNavigate();
    const [navigateSuccess, setNavigateSuccess] = useState("");
    const [inputsData, setInputsData] = useState({email: "",
        password: "",
        password_confirmation: ""
    });

    const updateFieldValues = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // setInputsData({[name]: value});
        setInputsData(previousState => {
            return { ...previousState, [name]: value}
          });
    }

    const createUser = (event) => {
        const {
            email,
            password,
            password_confirmation
        } = inputsData
        axios.post("http://localhost:3001/users",
        {
            email: email,
            password: password,
            password_confirmation: password_confirmation
        },
        {withCredentials: true}
        )
        .then(response => {
            // console.log("response is ", response);
            if (response.data.status === "Created") {
                setNavigateSuccess(response.data);
                // const data = response.dat a;
                // history.replace('/');
                // const navigate = useNavigate();
                // navigate('/');
                // this.useHandleSuccessfulSignin(response.data);
            }
        })
        .catch(error => {
            console.log("error is", error);
        });
        event.preventDefault();
    }

    useEffect(() => {
        if (navigateSuccess.length !== 0){
            navigate("/", { replace: true });
        }
    }, [navigateSuccess]);

    // const useHandleSuccessfulSignin = (data) => {
    //     return <Redirect to='/target' />
    //     const history = createHashHistory();
    //     history.go("/login");
    //     const history = useHistory()
    //     history.push("/")
    //     const navigate = useNavigate();
    //     navigate('/');
    //     this.props.history.push("/");
    // }

    return(
        <form onSubmit={createUser}>
            <div>
                <TodolistNavbar />
                <label> Email: </label>
                <br></br>
                <input
                type="text"
                name="email"
                placeholder="Email"
                value = {inputsData.email || ""}
                onChange = {updateFieldValues}/>
                <br></br>
                <label> Password:</label>
                <br></br>
                <input
                type="password"
                name="password"
                placeholder="Password"
                value = {inputsData.password || ""}
                onChange = {updateFieldValues}/>
                <br></br>
                <label> Password Confirmation:</label>
                <br></br>
                <input
                type="password"
                name="password_confirmation"
                placeholder="Password Confirmation"
                value = {inputsData.password_confirmation || ""}
                onChange = {updateFieldValues}/>
                <br></br>
                <button type="submit" onClick={createUser}>Create User</button>
            </div>
        </form>
    );
}

export default Registration;