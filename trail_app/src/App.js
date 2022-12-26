import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import List from './component/List.js'
import Registration from './component/Registration';
import { useMemo, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import DynamicTable from './component/DynamicTable';
import ListData from './component/ListData';
import User from './component/Users'
import Login from './component/Login';
import axios from 'axios';

function App() {
  // this.handleSuccessfulRegistration = this.handleSuccessfulRegistration.bind(this);
  const [user, setUser] = useState({login_status: "NOT_LOGGED_IN",
    logged_in_user: ""});

  const handleSuccessfulAuthorization=(data) =>{
    setUser({
      login_status: "LOGGED_IN",
      logged_in_user: data
    });
  }

  const UserLoggedIn=()=>{
    axios.get("http://localhost:3001/is_user_logged_in",{withCredentials: true})
    .then(response => {
      // console.log("response is ", response);
      setUser({
        login_status: "LOGGED_IN",
        logged_in_user: response.data.user
      });
    })
    .catch(error => {
      console.log("error is", error);
      setUser({
        login_status: "NOT_LOGGED_IN",
        logged_in_user: ""
      });
    });
    // event.preventDefault();
  }

  useMemo(() => {
    UserLoggedIn();
  },[])
  // const TableData=[
  //   {id:1, fullName:"Noor Khan", age:25, city:"Patna"},
  //   {id:2, fullName:"Rapsan Jani", age:26, city:"Noida"},
  //   {id:3, fullName:"Monika Singh", age:18, city:"New Delhi"},
  //   {id:4, fullName:"Sunil Kumar", age:22, city: "Jaipur"},
  //   {id:5, fullName:"Kajol Kumari", age: 21, city: "Chennai"}
  // ]

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/dashboard" element= {<List />}> </Route> */}
          <Route path="/dashboard"
          element = { <List login_status = {user.login_status}/> } > </Route>
          <Route path="registrations"
          element = {<Registration handleSuccessfulAuthorization={handleSuccessfulAuthorization} login_status = {user.login_status}/>} />
          {/* <Route
            path = "/table"
            element = {<DynamicTable Tabledata={TableData}/>} >
          </Route> */}
          <Route
            path = "/lists"
            element = {<ListData login_status = {user.login_status} />}>
          </Route>
          <Route path="/users" element = {<User login_status = {user.login_status} />} ></Route>
          <Route 
          path="/login" 
          element = {<Login handleSuccessfulAuthorization={handleSuccessfulAuthorization} login_status = {user.login_status}/>} >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    // <div>
    //   <List />
    //   <Registration />
    // </div>
  );
}

export default App;
