import moment from 'moment'
import React, { useState } from 'react'
import Employee from './Employee'
import './schedule.scss'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdUnfoldMore, MdUnfoldLess } from "react-icons/md"

const TimeLine = ({employees}) => {
    const [start, setStart]=useState(moment().locale("en-gb").format('LL'))
    const [stacked, setStacked] = useState(true)

    const prevDate=()=>{
        setStart(prev=>moment(prev).subtract(7, 'd').locale("en-gb").format('LL'))
    }
    const nextDate=()=>{
        setStart(prev=>moment(prev).add(7, 'd').locale("en-gb").format('LL'))
    }
    return (
        <div className="card-body">
            <div className="timeLine-card">
                <button className="timeLine-btn" onClick={prevDate}><MdKeyboardArrowLeft /></button>
                <button className="timeLine-btn" onClick={() => {setStacked(!stacked)}}>{stacked ? <MdUnfoldMore /> : <MdUnfoldLess />}</button>
                <button className="timeLine-btn" onClick={nextDate}><MdKeyboardArrowRight /></button>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                            <th></th>
                            <th>{moment(start).add(0, 'd').format('LL')}</th>
                            <th>{moment(start).add(1, 'd').format('LL')}</th>
                            <th>{moment(start).add(2, 'd').format('LL')}</th>
                            <th>{moment(start).add(3, 'd').format('LL')}</th>
                            <th>{moment(start).add(4, 'd').format('LL')}</th>
                            <th>{moment(start).add(5, 'd').format('LL')}</th>
                            <th>{moment(start).add(6, 'd').format('LL')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee)=> <Employee key={employee.id} employee={employee} start={start} stacked={stacked}/>)}
                    </tbody>
                </table>
            </div>
    </div>
    )
}

export default TimeLine

