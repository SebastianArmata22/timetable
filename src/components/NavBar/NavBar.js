import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import avatar from '../../assets/img/undraw_profile.svg'
import { auth } from '../../firebase/config'
import './navBar.css'
const NavBar = ({user}) => {
    const history=useHistory()
    const [showMenu, setShowMenu]=useState(false)
    const changeShowMenu = ()=>{
        setShowMenu(prev=>!prev)
    }
    const logout=()=>{
        auth.signOut().then(() => {
            history.push("/")
          }).catch((error) => {
            console.log(error)
          });
    }
    return (
        <div className="nav shadow">
            <div onClick={changeShowMenu} className="nav-container__profile">
                <span className="nav-span">{`Sebastian Armata`}</span>
                <img className="nav-img__profile" alt="profile" src={avatar} />
            </div>
            <div style={{display: showMenu ? "block" : "none"}}>
                <div className="nav-dropdown shadow">
                    <p className="" onClick={logout}>
                        Wyloguj się
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NavBar
