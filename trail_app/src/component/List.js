import React from "react";
import './List.css'
import axios from 'axios';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: ""
        }
    }

    updateStateVariables = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    formSubmit = (event) => {
        const {
            title,
            description
        } = this.state;
        axios.post("http://localhost:3001/lists",
        {
            title: title,
            description: description
        },
        {withCredentials: true}
        )
        .then(response => {
            console.log("response is ", response);
        })
        .catch(error => {
            console.log("error is", error);
        });
        // event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <header> ToDo List </header>
                <input 
                    type = "text"
                    name = "title"
                    value = {this.state.title}
                    placeholder = "Please Enter Task title" 
                    onChange={this.updateStateVariables}/>
                <br></br>
                <input
                    type = "textbox"
                    name = "description"
                    value = {this.state.description}
                    placeholder = "Please Enter Task description"
                    onChange={this.updateStateVariables}/>
                <br></br>
                <button type = "submit"> Submit</button>
            </form>
        );
    }
}

export default List;