import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth, database } from '../../firebase/config'
import './registration.scss'

const Registration = () => {
    const usersCollection = database.collection('users')
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
                        name="name"
                        type="text" 
                        placeholder="Name..." 
                        value={user.name}
                        onChange={changeUser}>
                    </input>
                    <input 
                        name="lastName"
                        type="text" 
                        placeholder="Last name..." 
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