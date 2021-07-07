import React, { useEffect, useState } from 'react'

const TimeLineItem = ({date,schedule}) => {
    const [hours, setHours]=useState([])
    useEffect(()=>{
        schedule.map(schedule=>{
            if(schedule.day===date)
            setHours(schedule.slots)
            return schedule
        })
    },[date,schedule])
    return (
        <td>{hours.map(hour=><sapn>{hour}</sapn>)}</td> 
    )
}

export default TimeLineItem
