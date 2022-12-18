import React from "react";

class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password_confirmation: ""
        }
    }

    createUser = (event) => {
        const {
            email,
            password,
            password_confirmation
        } = this.state
    }
    render(){
        return(
            <form onSubmit={this.createUser}>
                <div>
                    <label> Email: </label>
                    <br></br>
                    <input type="text" name="email" placeholder="Email" value = {this.state.email}/>
                    <br></br>
                    <label> Password:</label>
                    <br></br>
                    <input type="text" name="password" placeholder="Password" value = {this.state.password}/>
                    <br></br>
                    <label> Password Confirmation:</label>
                    <br></br>
                    <input type="text" name="password_confirmation" placeholder="Password Confirmation" value = {this.state.password_confirmation}/>
                    <br></br>
                    <button type="submit">Create User</button>
                </div>
            </form>
        );
    }
}

export default Registration;