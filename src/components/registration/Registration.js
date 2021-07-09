import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth, database } from '../../firebase/config'
import './registration.scss'
import welcome from '../../assets/img/welcome.svg'
import { useTranslation } from "react-i18next"

const Registration = () => {
    const usersCollection = database.collection('users')
    const { t, i85n } = useTranslation();
    const [message, setMessage]=useState("")
    const history=useHistory()
    const [user, setUser]=useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: ""
    })

    const changeUser=(event)=>{
        const {name, value}=event.target
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const registrarion=(event)=>{
        event.preventDefault()
        if(user.password===user.repeatPassword){
            auth.createUserWithEmailAndPassword(user.email, user.password)
            .then(async (userCredential) => {
                const userData = userCredential.user;
                await usersCollection.doc(userData.uid).set({name: user.name, lastName: user.lastName, email: user.email, type: 1, schedule: []}).then(() => {
                    console.log("Document successfully written!");
                    history.push('/account')
    
                });

            })
            .catch((error) => {
              var errorMessage = error.message;
              setMessage(errorMessage)
            });
            }
            else{
                setMessage('Passwords are different!')
            }
        }
    const goToLogin=()=>{
        history.push('/')
    }

    return (
            <div className="registration">
                <div className="registration-container__form">
                    <p>{t("Create an Account")}!</p>
                    <form onSubmit={registrarion} className="registration-form">
                    <input 
                            name="name"
                            type="text" 
                            placeholder={`${t("Name")}...`}
                            value={user.name}
                            onChange={changeUser}>
                        </input>
                        <input 
                            name="lastName"
                            type="text" 
                            placeholder={`${t("Last name")}...`}
                            value={user.lastName}
                            onChange={changeUser}>
                        </input>
                        <input 
                            name="email"
                            type="email" 
                            placeholder="Email..." 
                            value={user.email}
                            onChange={changeUser}>
                        </input>
                        <input 
                            name="password"
                            type="password" 
                            placeholder={`${t("Password")}...`}
                            value={user.password}
                            onChange={changeUser}>
                        </input>
                        <input 
                            name="repeatPassword"
                            type="password" 
                            placeholder={`${t("Repeat password")}...`}
                            value={user.repeatPassword}
                            onChange={changeUser}>
                        </input>
                        <input type="submit" value={t("Create account")}></input>
                    </form>
                    <p className="login-text__message">{message}</p>
                    <p className="registration-link" onClick={goToLogin}>{t("Already have an account")}? {t("Login")}!</p>
                </div>
                <div className="registration-container__img">
                    <img src={welcome} alt="registartion" ></img>
                </div>
            </div>
    )
}

export default Registration