import React, { useEffect, useState } from 'react'
import { database } from '../../firebase/config';

const TimeLineItem = ({date,id}) => {
    const [hours, setHours]=useState([])
    console.log(id)
    console.log(date)
    useEffect(()=>{
        database.collection("users").doc(id).collection('schedules')
        .where("day", "==", date)
        .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setHours(doc.data())
            });
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    },[date, id])
    return (
        <td>{hours.map(hour=><sapn>{hour.slot}</sapn>)}</td> 
    )
}

export default TimeLineItem
