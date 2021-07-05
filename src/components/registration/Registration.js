import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase/config'
import './registration.scss'

const Registration = () => {
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
            auth.createUserWithEmailAndPassword(user.email, user.password).then(() => {
                history.push('/')

            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode, errorMessage)
            });
        }
    }

    return (
            <div className="registration">
                <form onSubmit={registrarion} className="registration-form">
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
                        placeholder="Password..." 
                        value={user.password}
                        onChange={changeUser}>
                    </input>
                    <input 
                        name="repeatPassword"
                        type="password" 
                        placeholder="Repeat password..." 
                        value={user.repeatPassword}
                        onChange={changeUser}>
                    </input>
                    <input type="submit" value="Create account"></input>
                </form>

            </div>
    )
}

export default Registration