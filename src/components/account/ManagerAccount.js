import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { database } from '../../firebase/config'
import NavBar from '../NavBar/NavBar'
import TimeLine from '../schedule/TimeLine'
const ManagerAccount = () => {
    /*const [users,setUsers]=useState([])
    const [selectUser, setSelectUser]=useState(0)
        const changeSelectUser=(e)=>{
        setSelectUser(e.target.value)
    }
    */
    const queryToBase = database.collection("users").where("type", "==",1)
    const [employees] = useCollectionData(queryToBase,{idField: 'id'})
    return (
        <div>
            <NavBar />
          { /* <select 
                placeholder="Select an employee" 
                value={selectUser} 
                onChange={changeSelectUser}>
            </select>
          <Schedule schedule={[]} changeSchedule={()=>{}}/> */}
          <TimeLine employees={employees ? employees : []} />
        </div>
    )
}

export default ManagerAccount
