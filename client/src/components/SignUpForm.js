import React from 'react';
import styled from 'styled-components';
import {StyledTextInput, StyledSubmit, StyledInputMessage} from './styles/StyledInputs';
import axios from 'axios';

const StyledForm = styled.form`
    width: 50%;
    margin: auto;
    margin-top: 50px;
    padding: 40px;
    background: #ddd;
    border-radius: 20px;
`


class SignUpForm extends React.Component {
    state = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    constructor(props) {
        super(props)

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){

        if(validateUsername(this.state.userName) && validatePassword(this.state.password) && (this.state.password === this.state.confirmPassword)){
            axios.post('/signup', this.state).then(function(response){
                console.log("a response!")
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        }else
        console.log("submission rejected!")

        event.preventDefault();
    }

    handleInputChange(event){
        let value = event.target.value
        value = value.replace(/ /g,"");
        this.setState({
            [event.target.name]: value
        })
    }
    render() {
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <label>Username</label>
                    <div className="relative">
                    <StyledTextInput type="text" name="userName" value={this.state.userName} onChange={this.handleInputChange} required maxLength="24"></StyledTextInput>
                    {!validateUsername(this.state.userName) && <StyledInputMessage>Username should be 3 or more characters with only letters, numbers, or underscores ( _ )</StyledInputMessage>}
                    </div>
                <label>Email</label>
                    <StyledTextInput type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required></StyledTextInput>
                <label>Password</label>
                    <div className="relative">
                    <StyledTextInput type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required maxLength="32"></StyledTextInput>
                    {!validatePassword(this.state.password) && <StyledInputMessage>Pasword should be 8 or more characters</StyledInputMessage>}
                    </div>
                <label>Confirm Password</label>
                    <div className="relative">
                    <StyledTextInput type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange} required maxLength="32"></StyledTextInput>
                    {(this.state.password !== this.state.confirmPassword) && <StyledInputMessage>Does not match</StyledInputMessage>}
                    </div>
                <div className="flex flex-row-reverse">
                    <StyledSubmit value="Sign Up" />
                </div>
            </StyledForm>
        )
    }
}

function validateUsername(userName){
    if(/[^\w_]/.test(userName))
        return false
    else
        return !(userName.length < 3 && userName.length > 0)
}

function validatePassword(password){
    return !(password.length < 8 && password.length > 0)
}



export default SignUpForm