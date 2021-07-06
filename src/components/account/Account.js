import React, { useEffect, useState } from 'react'
import { auth, database } from '../../firebase/config'
import EmployeeAccount from './EmployeeAccount'
import ManagerAccount from './ManagerAccount'

const Account = () => {
    const { uid } = auth.currentUser
    const [isEmployee, setIsEmployee]=useState(null)
    useEffect(()=>{
        database.collection("users").doc(uid).get().then((doc)=>{
            if (doc.exists) {
                setIsEmployee(doc.data().type)                
            } else {
                console.log("No such document!");
            }
        
        })
    },[])
    return (
        <div>
            {isEmployee!==null && (isEmployee===1 ? <EmployeeAccount /> : <ManagerAccount />)}
        </div>
    )
}

export default Account
