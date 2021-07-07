import React, { useEffect, useState } from 'react'

const TimeLineItem = ({date,schedules}) => {
    const [hours, setHours]=useState([])
    useEffect(()=>{
        schedules.map(schedule=>{
            if(schedule.day===date)
            setHours(schedules.slots)
            return schedule
        })
    },[date, schedules])
    return (
        <td>{hours.map(hour=><sapn>{hour.from}-{hour.to}</sapn>)}</td>
    )
}

export default TimeLineItem
