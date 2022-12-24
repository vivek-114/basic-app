import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import List from './component/List.js'
import Registration from './component/Registration';
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import DynamicTable from './component/DynamicTable';
import ListData from './component/ListData';

function App() {
  // this.handleSuccessfulRegistration = this.handleSuccessfulRegistration.bind(this);
  const [user, setUser] = useState({login_status: "NOT_LOGGED_IN",
    logged_in_user: ""});
  debugger;
  const handleSuccessfulRegistration=(data) =>{
    setUser({
      login_status: "LOGGED_IN",
      logged_in_user: data
    });
  }

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
          <Route
          path="/dashboard"
          element = {
            <List login_status = {user.login_status}/>
          }
          >
          </Route>
          <Route
          path="registrations"
          element = {<Registration handleSuccessfulRegistration={handleSuccessfulRegistration}/>} />
          {/* <Route
            path = "/table"
            element = {<DynamicTable Tabledata={TableData}/>} >
          </Route> */}
          <Route
            path = "/lists"
            element = {<ListData />}>
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
