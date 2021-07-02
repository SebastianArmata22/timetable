import React, { useState } from 'react'
import './login.css'
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
    const login=(event)=>{
        event.preventDefault()
    }
    return (
        <div className="login">
        <h2>Witamy z powrotem!</h2>
        <form onSubmit={login} className="login-form">
            <input name="email" type="email" placeholder="email..." value={userCredential.email} 
                onChange={changeUserCredential}></input>
            <input name="password" type="password" placeholder="hasło..." value={userCredential.password}
                onChange={changeUserCredential}></input>
            <input type="submit" value="Zaloguj"></input>
        </form>
    </div>
    )
}

export default Login
