import React, { useState } from 'react'
import { auth } from '../../firebase/config'
import './login.scss'
import { useHistory } from 'react-router-dom'
import login from '../../assets/img/login.svg'
import { useTranslation } from "react-i18next"

const Login = () => {
    const history=useHistory()
    const { t, i85n } = useTranslation();
    const [message, setMessage]=useState("")
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
            var errorMessage = error.message;
            setMessage(errorMessage)
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
            <p>{t("Welcome Back")}!</p>
            <form onSubmit={loginSubmit} className="login-form">
                <input name="email" type="email" placeholder="Email..." value={userCredential.email} 
                    onChange={changeUserCredential}></input>
                <input name="password" type="password" placeholder={`${t("Password")}...`} value={userCredential.password}
                    onChange={changeUserCredential}></input>
                <input type="submit" value={t("Log in")}></input>
            </form>
            <p className="login-text__message">{message}</p>
            <p className="login-link" onClick={goToRegistration}>{t("Create an Account")}!</p>
        </div>
    </div>
    )
}

export default Login
