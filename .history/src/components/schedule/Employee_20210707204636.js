
import moment from 'moment'
import React, { useState } from 'react'
import TimeLineItem from './TimeLineItem'

const Employee = ({employee, start}) => {
   const [date]=useState([moment(start).format('YYYY-MM-DD'),
    moment(start).add(1, 'd').format('YYYY-MM-DD'),
    moment(start).add(2, 'd').format('YYYY-MM-DD'),
    moment(start).add(3, 'd').format('YYYY-MM-DD'),
    moment(start).add(4, 'd').format('YYYY-MM-DD'),
    moment(start).add(5, 'd').format('YYYY-MM-DD'),
    moment(start).add(6, 'd').format('YYYY-MM-DD')])

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

    return (
        <tr >
            <td>{employee.name} {employee.lastName}</td>
            {date.map(item=><TimeLineItem id={employee.id} date={item}/>)}
        </tr>
    )
}

export default Employee
