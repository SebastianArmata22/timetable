
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { database } from '../../firebase/config'
import Interval from './Interval'
import './schedule.scss'

const Employee = ({employee, start, stacked}) => {
   const [date, setDate]=useState([])
   const queryToBase = database.collection("users").doc(employee.id).collection('schedules').where("day", "in", [moment(start).format('YYYY-MM-DD'), moment(start).add(1, 'd').format('YYYY-MM-DD'),moment(start).add(2, 'd').format('YYYY-MM-DD'),moment(start).add(3, 'd').format('YYYY-MM-DD'),moment(start).add(4, 'd').format('YYYY-MM-DD'),moment(start).add(5, 'd').format('YYYY-MM-DD'),moment(start).add(6, 'd').format('YYYY-MM-DD')])
   const [schedules] = useCollectionData(queryToBase)
   const [stackedSchedules, setStackedSchedules] = useState([])
   
   const timeDiffMinutes = (start, end) => {
       const [startHours, startMinutes] = start.split(":");
       const [endHours, endMinutes] = end.split(":");

       return (Number(endHours) - Number(startHours)) * 60 + (Number(endMinutes) - Number(startMinutes))
   }

   const timeDiffString = (time) => {
       const hours = Math.floor(time / 60);
       const minutes = time - hours * 60;
       return `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}`
   }

   const getStackedSchedules = () => {
       return schedules.map((schedule) => {
           let minutes = 0;
           console.log(schedule.slots)
           schedule.slots.forEach((slot) => {
               minutes += timeDiffMinutes(slot.from, slot.to);
           })
           return {
               day: schedule.day,
               slots: [
                   {
                       from: timeDiffString(minutes),
                       to: " ",
                   }
               ]
           }
       })
   }

   React.useEffect(() => {
       if (schedules) setStackedSchedules(getStackedSchedules(schedules));
   }, [schedules]);

       /* useEffect(()=>{
            database.collection("users").doc(employee.id).collection('schedules')
            .where("day", "in", [moment(start).format('YYYY-MM-DD'), moment(start).add(1, 'd').format('YYYY-MM-DD'),moment(start).add(2, 'd').format('YYYY-MM-DD'),moment(start).add(3, 'd').format('YYYY-MM-DD'),moment(start).add(4, 'd').format('YYYY-MM-DD'),moment(start).add(5, 'd').format('YYYY-MM-DD'),moment(start).add(6, 'd').format('YYYY-MM-DD')])
            .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        setSched(prev=>[...prev,doc.data()])
                });
            })
            .catch((error) => {
                console.log("Error:", error);
            });
        },[employee, start])
        */
        useEffect(()=>{
            setDate([moment(start).format('YYYY-MM-DD'),
                moment(start).add(1, 'd').format('YYYY-MM-DD'),
                moment(start).add(2, 'd').format('YYYY-MM-DD'),
                moment(start).add(3, 'd').format('YYYY-MM-DD'),
                moment(start).add(4, 'd').format('YYYY-MM-DD'),
                moment(start).add(5, 'd').format('YYYY-MM-DD'),
                moment(start).add(6, 'd').format('YYYY-MM-DD')])
        }, [start])
    return (
        <tr className="employee-row">
            <td className="employee-text">{employee.name} {employee.lastName}</td>
            {date.map(item=><Interval schedules={stacked ? (stackedSchedules ? stackedSchedules : []) : (schedules ? schedules : [])} date={item} stacked={stacked}/>)}
        </tr>
    )
}

export default Employee
