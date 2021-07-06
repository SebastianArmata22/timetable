import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './counter.scss'
import { BsFillTriangleFill, BsFillSquareFill } from "react-icons/bs";
const Counter = () => {
    const [start, setStart]=useState({
        hour: 0,
        minute: 0,
        second: 0
    })
    //const [stop, setStop]=useState(null)
    const [time, setTime]=useState({
        seconds:0,
        minutes:0,
        hours:0
    })
    const [counter, setCounter]=useState(0)
    const changeCounter=()=>{
        setCounter(prev=>prev+1)
    }
    const startCount = ()=>{
        setStart({
            hour: moment().hours(),
            minute: moment().minutes(),
            second: moment().seconds()
        })
        setInterval(()=>{
            changeCounter()
        }, 1000)
    }
    const stopCount = ()=>{
       // setStop(moment().format())
        
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
