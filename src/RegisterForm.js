import React, { Component } from 'react';
import * as firebase from 'firebase';
export default class LoginForm extends Component{
    /*constructor(){
        super();
        //this.loginUser = this.loginUser.bind(this);
    }
    loginUser = function(e){
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

    registerUser = function(e){
        e.preventDefault();
        const email = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if(email == '' || password== ''){

        }else{
            const promise = 
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });

            alert("User Created...!");
        }
    }

componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }

*/
    handleSubmit = (e) => {
        e.preventDefault();
        
        const email = document.getElementById("username").value;
        const password = document.getElementById("password").value;
       if(email == '' || password== ''){
            alert("Please enter email and password !");
        }else{
            
            const promise = 
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
            alert("User Created...!");
        }
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} >
                <span>Username</span>
                <input type="text" name="username" id="username" />
                <br/><span>Password</span>
                <input type="password" name="password" id="password" />
                <br/>
                <button id="btnRegister">Register</button>
            </form>
        );
    }
}
//onSubmit={this.handleSubmit}