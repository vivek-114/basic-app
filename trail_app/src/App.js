import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import List from './component/List.js'
import Registration from './component/Registration';
import { useState } from 'react';

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
