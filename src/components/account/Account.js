import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Counter from '../counter/Counter'
import Schedule from '../schedule/Schedule'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, database } from '../../firebase/config';
const Account = () => {
    const { uid } = auth.currentUser
    console.log(uid)
    const queryToBase = database.collection("users").doc(uid).collection('schedules')
    const [schedules] = useCollectionData(queryToBase)
    console.log(schedules, "sss")
    const changeSchedule=async (schedule)=>{
        await database.collection('users').doc(uid).collection('schedules').add(schedule[0])
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

    }
    return (
        <div>
            <NavBar />
            <Counter />
            <Schedule schedule={schedules? schedules:[]} changeSchedule={changeSchedule}/>
        </div>
    )
}

export default Account
