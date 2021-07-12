import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import avatar from '../../assets/img/undraw_profile.svg'
import { auth } from '../../firebase/config'
import './navBar.scss'
import { useTranslation } from "react-i18next"
const NavBar = () => {
    const user=auth.currentUser
    const history=useHistory()
    const [showMenu, setShowMenu]=useState(false)
    const { t, i18n } = useTranslation();
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
                <span className="nav-span">{user.email}</span>
                <img className="nav-img__profile" alt="profile" src={avatar} />
            </div>
            <div style={{display: showMenu ? "block" : "none"}}>
                <div className="nav-dropdown shadow">
                    <p className="" onClick={logout}>
                        {t("Log out")}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NavBar
