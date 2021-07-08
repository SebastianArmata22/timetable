
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { database } from '../../firebase/config'
import Interval from './Interval'
import './schedule.scss'
const Employee = ({employee, start}) => {
   const [date, setDate]=useState([])
   const queryToBase = database.collection("users").doc(employee.id).collection('schedules').where("day", "in", [moment(start).format('YYYY-MM-DD'), moment(start).add(1, 'd').format('YYYY-MM-DD'),moment(start).add(2, 'd').format('YYYY-MM-DD'),moment(start).add(3, 'd').format('YYYY-MM-DD'),moment(start).add(4, 'd').format('YYYY-MM-DD'),moment(start).add(5, 'd').format('YYYY-MM-DD'),moment(start).add(6, 'd').format('YYYY-MM-DD')])
   const [schedules] = useCollectionData(queryToBase)
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
            {date.map(item=><Interval schedules={schedules ? schedules : []} date={item}/>)}
        </tr>
    )
}

export default Employee
