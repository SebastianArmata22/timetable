
import React, { useEffect, useState } from 'react'


const Employee = ({employee, start}) => {

   const [schedule, setSchedule]=useState([])
    const compare=( a, b )=> {
        if ( moment(a.day).isAfter(moment(b.day)) ){
          return -1;
        }
        if ( moment(a.day).isBefore(moment(b.day))){
          return 1;
        }
        return 0;
      }
    useEffect( ()=>{
         database.collection("users").doc(employee.id).collection('schedules')
        .where("day", "in", [moment(start).format('YYYY-MM-DD'), moment(start).add(1, 'd').format('YYYY-MM-DD'),moment(start).add(2, 'd').format('YYYY-MM-DD'),moment(start).add(3, 'd').format('YYYY-MM-DD'),moment(start).add(4, 'd').format('YYYY-MM-DD'),moment(start).add(5, 'd').format('YYYY-MM-DD'),moment(start).add(6, 'd').format('YYYY-MM-DD')])
        .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.data())
                   setSchedule(prev=>[...prev,doc.data()])
            });
        })
        .then(()=>{
            schedule.sort( compare );
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    },[start, employee])
    */
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
