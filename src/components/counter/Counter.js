import React, { useState } from 'react'
import moment from 'moment'
const Counter = () => {
    const [start, setStart]=useState(null)
    //const [stop, setStop]=useState(null)
    const [counter, setCounter]=useState(null)
    const startCount = ()=>{
        setStart(moment().format())
        setInterval(()=>{
            const duration=moment().format().diff(start)
            setCounter(duration)
        }, 1000)
    }
    const stopCount = ()=>{
       // setStop(moment().format())
        
    }
    return (
        <div>
            <button onClick={startCount}>Start</button>
            {counter && <p>{counter}</p>}
            <button onClick={stopCount}>Stop</button>
        </div>
    )
}

export default Counter
