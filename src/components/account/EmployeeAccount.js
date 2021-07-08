import React from 'react'
import NavBar from '../NavBar/NavBar'
import Counter from '../counter/Counter'
import Schedule from '../schedule/Schedule'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, database } from '../../firebase/config';
const EmployeeAccount = () => {
    const { uid } = auth.currentUser
    const queryToBase = database.collection("users").doc(uid).collection('schedules')
    const [schedules] = useCollectionData(queryToBase)

    const changeSchedule=async (schedule)=>{

        await database.collection("users").doc(uid).collection('schedules').where("day", "==", schedule[0].day)
        .get()
            .then((querySnapshot) => {
                querySnapshot.size===0 &&  database.collection('users').doc(uid).collection('schedules').add(schedule[0])
                querySnapshot.forEach((doc) => {
                    database.collection('users').doc(uid).collection('schedules').doc(doc.id).update(schedule[0])
            });
        })
    }
    return (
        <div>
            <NavBar />
            <Counter />
            <Schedule schedule={schedules? schedules:[]} changeSchedule={changeSchedule}/>

        </div>
    )
}

export default EmployeeAccount
