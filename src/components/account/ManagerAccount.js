import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Schedule from '../schedule/Schedule'
const ManagerAccount = () => {
    const [users,setUsers]=useState([])
    const [selectUser, setSelectUser]=useState(0)
    const changeSelectUser=(e)=>{
        setSelectUser(e.target.value)
    }
    return (
        <div>
            <NavBar />
            <select 
                placeholder="Select an employee" 
                value={selectUser} 
                onChange={changeSelectUser}>
            </select>
            <Schedule schedule={[]} changeSchedule={()=>{}}/>
        </div>
    )
}

export default ManagerAccount
