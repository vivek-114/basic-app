import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate, useMemo } from "react-router-dom";
import TodolistNavbar from "./TodolistNavbar";
import FlashAlert from "./FlashAlert";

function Login(props){

    const navigate = useNavigate();
    const [navigateSuccess, setNavigateSuccess] = useState("");
    const [flashNotice, setFlashNotice] = useState("");
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

    const setLoginDetails=(event)=>{
        setLoginData(previousState => {
            return { ...previousState, [event.target.name]: event.target.value}
          }
        );
    }

    const loginUser= (event) =>{
        const {
            email,
            password
        } = loginData
        axios.post("http://localhost:3001/login",
        {
            email: email,
            password: password
        },{withCredentials: true})
        .then(response => {
            debugger;
            console.log("response is",response);
            if (response.data.status === "LoggedIn") {
                props.handleSuccessfulAuthorization(response.data.user);
                setNavigateSuccess(response.data);
                setIsLoginSuccessful(true);
            } else {
                console.log("login failed");
                setIsLoginSuccessful(false);
                setFlashNotice("Login Failed! please check the username and password.")
            }
        })
        .catch(error => {
            console.log("error is", error);
        });
        event.preventDefault();
    }

    useEffect(() => {
        if (navigateSuccess.length !== 0){
            navigate("/dashboard", { replace: true , state: navigateSuccess});
        }
    }, [navigateSuccess]);

    return(
        <div>
            {isLoginSuccessful ? (
                <form>
                <TodolistNavbar login_status = {props.login_status}/>
                <label> Email:</label>
                <br></br>
                <input type="email" name="email" value={loginData.email || ""} placeholder="Enter Email"
                onChange={setLoginDetails} />
                <br></br>
                <label> Password:</label>
                <br></br>
                <input type="password" name="password" value={loginData.password || ""} placeholder="Enter Password"
                onChange={setLoginDetails} />
                <br></br>
                <button type="submit" onClick={loginUser}>LOGIN</button>
            </form>
            ) : (
                <form>
                <TodolistNavbar login_status = {props.login_status}/>
                {flashNotice && <FlashAlert message={ flashNotice } />}
                <label> Email:</label>
                <br></br>
                <input type="email" name="email" value={loginData.email || ""} placeholder="Enter Email"
                onChange={setLoginDetails} />
                <br></br>
                <label> Password:</label>
                <br></br>
                <input type="password" name="password" value={loginData.password || ""} placeholder="Enter Password"
                onChange={setLoginDetails} />
                <br></br>
                <button type="submit" onClick={loginUser}>LOGIN</button>
            </form>
            )}
        </div>
    );
}

export default Login;