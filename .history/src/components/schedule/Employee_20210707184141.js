
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import {database} from '../../firebase/config'

const Employee = ({employee, start}) => {

   const [schedule, setSchedule]=useState([[],[],[],[],[],[],[]])
    const compare=( a, b )=> {
        if ( moment(a.day).isAfter(moment(b.day)) ){
          return -1;
        }
        if ( moment(a.day).isBefore(moment(b.day))){
          return 1;
        }
        return 0;
      }
    (function(){
        database.collection("users").doc(employee.id).collection('schedules')
        .where("day", "in", [moment(start).format('YYYY-MM-DD'), moment(start).add(1, 'd').format('YYYY-MM-DD'),moment(start).add(2, 'd').format('YYYY-MM-DD'),moment(start).add(3, 'd').format('YYYY-MM-DD'),moment(start).add(4, 'd').format('YYYY-MM-DD'),moment(start).add(5, 'd').format('YYYY-MM-DD'),moment(start).add(6, 'd').format('YYYY-MM-DD')])
        .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.data(),"ddd")
            });
        })

        .catch((error) => {
            console.log("Error:", error);
        });
    })()

    return (
        <tr >
            <td>{employee.name} {employee.lastName}</td>
            <td>{/*schedule[0].map((item)=><span>{item}</span>)*/}</td>
            <td>{/*schedule[1].map((item)=><span>{item}</span>)*/}</td>
            <td>{/*schedule[2].map((item)=><span>{item}</span>)*/}</td>
            <td>{/*schedule[3].map((item)=><span>{item}</span>)*/}</td>
            <td>{/*schedule[4].map((item)=><span>{item}</span>)*/}</td>
            <td>{/*schedule[5].map((item)=><span>{item}</span>)*/}</td>
            <td>{/*schedule[6].map((item)=><span>{item}</span>)*/}</td>
        </tr>
    )
}

export default Employee
