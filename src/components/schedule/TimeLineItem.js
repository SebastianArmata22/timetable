import React, { useEffect, useState } from 'react'
import { database } from '../../firebase/config';

const TimeLineItem = ({date,id}) => {
    const [hours, setHours]=useState([])
    useEffect(()=>{
        setHours([])
        database.collection("users").doc(id).collection('schedules')
        .where("day", "==", date)
        .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setHours(doc.data().slots)
                    console.log(date)
            });
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    },[date, id])
    return (
        <td>{hours.map(hour=><sapn>{hour.from}-{hour.to}</sapn>)}</td> 
    )
}

export default TimeLineItem
