import React from "react";
import axios from "axios";
import { useState, useMemo } from 'react';
import DynamicTable from './DynamicTable';

// class ListData extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             listData: [
//                 {}
//               ]
//         };
//         // this.getListData = this.getListData.bind(this);
//         // getListData();
//         axios.get("http://localhost:3001/lists",{withCredentials: true})
//         .then(response => {
//             console.log("response is ", response);
//             if (response.data.length !== 0){
//                 this.setState({
//                     listData: response.data
//                 })
//                 // setTotalListData(response.data);
//             }
//         })
//         .catch(error => {
//             console.log("error is", error);
//         });
//     }

//     // getListData=()=>{
//     //     axios.get("http://localhost:3001/lists",{withCredentials: true})
//     //     .then(response => {
//     //         console.log("response is ", response);
//     //         if (response.data.length !== 0){
//     //             this.setState({
//     //                 listData: response.data
//     //             })
//     //             // setTotalListData(response.data);
//     //         }
//     //     })
//     //     .catch(error => {
//     //         console.log("error is", error);
//     //     });
//     // }

//     // componentDidMount=()=>{
//     //     this.getListData();
//     // }

//     render(){
//         return(
//             <DynamicTable Tabledata={this.state.listData}/>
//         );
//     }
// }

function ListData(props) {
    const [totalListData, setTotalListData] = useState([{}]);

    useMemo(() => {
        axios.get("http://localhost:3001/lists",{withCredentials: true})
        .then(response => {
            console.log("response is ", response);
            if (response.data.length !== 0){
                setTotalListData(response.data);
            }
        })
        .catch(error => {
            console.log("error is", error);
        });
      }, []);

    // const getAllListData= () => {
    //     axios.get("http://localhost:3001/lists",{withCredentials: true})
    //     .then(response => {
    //         console.log("response is ", response);
    //         if (response.data.length !== 0){
    //             setTotalListData(response.data);
    //         }
    //     })
    //     .catch(error => {
    //         console.log("error is", error);
    //     });
    // }
    return(
        <DynamicTable Tabledata={totalListData}/>
        // <div onLoad={getAllListData()}>
        //     <DynamicTable Tabledata={totalListData}/>
        // </div>
    );
}

export default ListData;