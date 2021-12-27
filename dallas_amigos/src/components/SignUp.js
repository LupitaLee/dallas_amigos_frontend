import React, { Component } from 'react'

export class SignUp extends Component {

    state = {
        username:'',
        email:'',
        password: ''
    }

    handleChange = (event)=> {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                 <form>
                <h1>Dallas Amigos <br /><center>Sign Up </center></h1>
                <label>Username :</label>
                <input name='username' value={this.state.username} onChage={this.handleChange} />

                <label>Email</label>
                <input name='email' value={this.state.email} />

                <label>Password :</label>
                <input name='password' type= 'password' value={this.state.password} />
                
               
                <input type='submit' value='Register' />
            </form>
                
            </div>
        )
    }
}

export default SignUp
