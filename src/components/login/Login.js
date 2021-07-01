import React, { useState } from 'react'

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
        <form onSubmit={login}>
            <input name="email" type="email" placeholder="email..." value={userCredential.email} 
                onChange={changeUserCredential}></input>
            <input name="password" type="password" placeholder="hasło..." value={userCredential.password}
                onChange={changeUserCredential}></input>
            <input type="submit" value="Zaloguj"></input>
        </form>
    )
}

export default Login
