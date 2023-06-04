import { useEffect } from "react";
import TodolistNavbar from "./TodolistNavbar";
// import TableData from "./TableData";
function DynamicTable(props){

// get table column
 const column = Object.keys(props.Tabledata[0]);

 // get table heading data
 const ThData =()=>{
    
     return column.map((data)=>{
         return <th key={data}>{data}</th>
     })
 }

// get table row data
const tdData =() =>{
   
     return props.Tabledata.map((data)=>{
       return(
           <tr>
                {
                   column.map((v)=>{
                       return <td>{data[v]}</td>
                   })
                }
           </tr>
       )
     })
}


  return (
    <div>
      <TodolistNavbar login_status = {props.login_status} user_role = {props.user_role}/>
      <table className="table">
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
       {props.login_status.length > 0 && props.login_status == "LOGGED_IN" &&
        <label> login status: {props.login_status}</label>
        }
    </div>
  )
}
export default DynamicTable;