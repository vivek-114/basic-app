import React from "react";
import axios from "axios";
import { useState, useMemo } from "react";
import DynamicTable from "./DynamicTable";

function User(props){
    const [createdUserData, setCreatedUserData] = useState([{}]);

    useMemo(() => {
        axios.get("http://localhost:3001/users", {withCredentials: true})
        .then((response)=> {
            if (response.data.length !== 0){
                setCreatedUserData(response.data);
            }
        })
        .catch(error => {
            console.log("error is", error);
        });
    }, []);

    return(
        <div>
            <DynamicTable Tabledata = {createdUserData} />
        </div>
    );
}

export default User;