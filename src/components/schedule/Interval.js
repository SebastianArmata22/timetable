import React, { useEffect, useState } from 'react'
import './schedule.scss'
const Interval = ({date,schedules}) => {
    const [hours, setHours]=useState([])
    useEffect(()=>{
        setHours([])
        schedules.map(schedule=>{
            if(schedule.day===date)
            {
               setHours(schedule.slots)
            }

            return schedule
        })
    },[date, schedules])
    return (
        <td className="interval-cell">{hours.map(hour=><span className="interval-text">{hour.from}-{hour.to}</span>)}</td>
    )
}

export default Interval
