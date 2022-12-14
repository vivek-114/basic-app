import React from "react";
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
        debugger;
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <h1> ToDo List </h1>
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