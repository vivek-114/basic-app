import React from "react";

class Registration extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <form onSubmit={this.createUser}>
                <div>
                    <label> Email: </label>
                    <br></br>
                    <input type="text" name="email" placeholder="Email"/>
                    <br></br>
                    <label> Password:</label>
                    <br></br>
                    <input type="text" name="password" placeholder="Password"/>
                    <br></br>
                    <label> Password Confirmation:</label>
                    <br></br>
                    <input type="text" name="password_confirmation" placeholder="Password Confirmation"/>
                </div>
            </form>
        );
    }
}

export default Registration;