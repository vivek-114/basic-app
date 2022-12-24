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
      <TodolistNavbar />
      <table className="table">
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
    </div>
  )
}
export default DynamicTable;