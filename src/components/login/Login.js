import React, { useState } from 'react'
import { auth } from '../../firebase/config'
import './login.css'
import { Link } from 'react-router-dom'
const Login = () => {
    const [userCredential, setuserCredential]= useState({
        email: "",
        password: ""
    })
    const changeUserCredential=(event)=>{
        const {name, value}=event.target
        setuserCredential(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const loginSubmit=(event)=>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(userCredential.email, userCredential.password)
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

    }
    const login=(event)=>{
        event.preventDefault()
    }
    return (
    <div className="login">
        <h2>Witamy z powrotem!</h2>
        <form onSubmit={loginSubmit} className="login-form">
            <input name="email" type="email" placeholder="email..." value={userCredential.email} 
                onChange={changeUserCredential}></input>
            <input name="password" type="password" placeholder="hasło..." value={userCredential.password}
                onChange={changeUserCredential}></input>
            <input type="submit" value="Zaloguj"></input>
        </form>
        <Link to="/registration">Registration</Link>
    </div>
    )
}

export default Login
