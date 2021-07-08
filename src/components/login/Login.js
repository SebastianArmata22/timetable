import React, { useState } from 'react'
import { auth } from '../../firebase/config'
import './login.scss'
import { useHistory } from 'react-router-dom'
import login from '../../assets/img/login.svg'
const Login = () => {
    const history=useHistory()
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
    const goToRegistration=()=>{
        history.push("/registration")
    }
    return (
    <div className="login">
        <div className="login-container__img">
            <img src={login} alt="login"></img>
        </div>
        <div className="login-container">
            <p>Welcome Back!</p>
            <form onSubmit={loginSubmit} className="login-form">
                <input name="email" type="email" placeholder="Email..." value={userCredential.email} 
                    onChange={changeUserCredential}></input>
                <input name="password" type="password" placeholder="Password..." value={userCredential.password}
                    onChange={changeUserCredential}></input>
                <input type="submit" value="Log in"></input>
            </form>
            <p className="login-link" onClick={goToRegistration}>Create an Account!</p>
        </div>
    </div>
    )
}

export default Login
