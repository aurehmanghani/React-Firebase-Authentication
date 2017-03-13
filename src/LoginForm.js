import React, { Component } from 'react';
import * as firebase from 'firebase';
export default class LoginForm extends Component{
   
  handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
  }


    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <span>Username</span>
                <input type="text" name="username" id="username" />
                <br/><span>Password</span>
                <input type="password" name="password" id="password" />
                <br/>
                <button id="btnLogin" onClick={this.loginUser} > SignIn</button>
            </form>
        );
    }
}