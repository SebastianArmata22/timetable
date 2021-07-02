import React, { useState } from 'react'
import moment from 'moment'
import './counter.scss'
const Counter = () => {
    const [start, setStart]=useState({
        hour: 0,
        minute: 0,
        second: 0
    })
    //const [stop, setStop]=useState(null)
    const [counter, setCounter]=useState({
        hour: 0,
        minute: 0,
        second: 0
    })
    const startCount = ()=>{
        setStart({
            hour: moment().hours(),
            minute: moment().minutes(),
            second: moment().seconds()
        })
        setInterval(()=>{
            console.log(counter)
            setCounter({
                hour: moment().hours()- start.hour,
                minute: moment().minutes()- start.minute,
                second: moment().seconds()- start.second
            })
        }, 1000)
    }
    const stopCount = ()=>{
       // setStop(moment().format())
        
    }
    return (
        <div className="counter">
            <button onClick={startCount}>Start</button>
            {counter && <p className="counter">{counter.hour}:{counter.minute}:{counter.second}</p>}
            <button onClick={stopCount}>Stop</button>
        </div>
    )
}

export default Counter
