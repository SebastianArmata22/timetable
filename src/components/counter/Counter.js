import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './counter.scss'
import { BsFillTriangleFill, BsFillSquareFill } from "react-icons/bs";
import { auth, database } from '../../firebase/config';
const Counter = () => {
    const {uid}=auth.currentUser
    const [start, setStart]=useState({
        day: "",
        hour: 0,
        minute: 0
    })

    const [time, setTime]=useState({
        seconds:0,
        minutes:0,
        hours:0
    })
    const [counter, setCounter]=useState(0)
 
    const intervalTrigger=()=>{
        return setInterval(()=>{
            setCounter(prev=>prev+1)
        }, 1000)
    }
    const startCount = ()=>{
        setStart({
            day: moment().format('YYYY-MM-DD'),
            hour: moment().hours(),
            minute: moment().minutes()
        })
        intervalTrigger()
    }
    const stopCount = async ()=>{
       const schedule={
           day: start.day,
           slots:[
               {
                   from: `${start.hour}:${start.minute}`,
                   to: `${moment().hours()}:${moment().minutes()}`,
               }
           ]
       }
       await database.collection("users").doc(uid).collection('schedules').where("day", "==", moment().format('YYYY-MM-DD'))
        .get()
            .then((querySnapshot) => {
                querySnapshot.size===0 &&  database.collection('users').doc(uid).collection('schedules').add(schedule)
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    database.collection('users').doc(uid).collection('schedules').doc(doc.id).update({
                        day: start.day,
                        slots:[
                            ...doc.data().slots,
                            {
                                from: `${start.hour}:${start.minute}`,
                                to: `${moment().hours()}:${moment().minutes()}`,
                            }
                        ]
                    })
            });
        })
        .catch((error) => {
            console.log("Error:", error);
        });
        
    }
    useEffect(() => {
        if(counter!==0){
            if(counter%60===0){
                setTime(prev=>({
                    ...prev,
                    minutes: prev.minutes+1,
                    seconds:0
                }))
            }
            else{
                setTime(prev=>({
                    ...prev,
                    seconds:prev.seconds+1
                }))
            }
            if(counter%3600===0){
                setTime(prev=>({
                    ...prev,
                    hours: prev.hours+1,
                    minutes:0,
                    seconds:0
                }))
            }
        }

    }, [counter])
    return (
        <div className="counter">
            <button onClick={startCount} className="counter-btn__start">
                <BsFillTriangleFill className="counter-icon counter-icon__start"/>
            </button>
            <p className="counter">
                {time.hours<10 && 0}{time.hours}:
                {time.minutes<10 && 0}{time.minutes}:
                {time.seconds<10 && 0}{time.seconds}
            </p>
            <button onClick={stopCount} className="counter-btn__stop">
                <BsFillSquareFill className="counter-icon"/>
            </button>
        </div>
    )
}

export default Counter
