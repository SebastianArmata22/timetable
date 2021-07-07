import React, { useEffect, useState } from 'react'

const TimeLineItem = ({date,schedules}) => {
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
        <td>{hours.map(hour=><sapn>{hour.from}-{hour.to}</sapn>)}</td>
    )
}

export default TimeLineItem
