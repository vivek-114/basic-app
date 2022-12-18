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

        const textInput = {
            height: "30px",
            width: "350px",
        };

        const textboxInput = {
            height: "50px",
            width: "350px",
            textRendering: "top !important",
            paddingTop: "0px",
            marginTop: "0px",
            textAlign: "top"
        };

        return(
            <form onSubmit={this.formSubmit}>
                <header> ToDo List </header>
                <label>Title:</label>
                <br></br>
                <input
                    // type = "text"
                    name = "title"
                    value = {this.state.title}
                    placeholder = "Please Enter Task title" 
                    style = {textInput}
                    onChange={this.updateStateVariables}/>
                <br></br>
                <label>Description:</label>
                <br></br>
                {/* <input
                    type = "textbox"
                    name = "description"
                    value = {this.state.description}
                    placeholder = "Please Enter Task description"
                    style = {textboxInput}
                    onChange={this.updateStateVariables}/> */}
                <textarea
                    name = "description"
                    value = {this.state.description}
                    placeholder = "Please Enter Task description"
                    style = {textboxInput}
                    onChange={this.updateStateVariables}/>
                <br></br>
                <button type = "submit"> Submit</button>
            </form>
        );
    }
}

export default List;