import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import List from './component/List.js'
import Registration from './component/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<List />}> </Route>
        <Route path="registrations" element = {<Registration />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <List />
    //   <Registration />
    // </div>
  );
}

export default App;
