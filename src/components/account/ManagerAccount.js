import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { database } from '../../firebase/config'
import NavBar from '../NavBar/NavBar'
import TimeLine from '../schedule/TimeLine'
const ManagerAccount = () => {
    const queryToBase = database.collection("users").where("type", "==",1)
    const [employees] = useCollectionData(queryToBase,{idField: 'id'})
    
    return (
        <div>
            <NavBar />
          <TimeLine employees={employees ? employees : []} />
        </div>
    )
}

export default ManagerAccount
