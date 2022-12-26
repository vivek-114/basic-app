import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(props){

    const navigate = useNavigate();
    const [navigateSuccess, setNavigateSuccess] = useState("");
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

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
            <form>
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
                <button type="submit" onClick={loginUser}>Create User</button>
            </form>
        </div>
    );
}

export default Login;