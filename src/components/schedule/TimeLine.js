import moment from 'moment'
import React, { useState } from 'react'
import Employee from './Employee'
import './schedule.scss'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

const TimeLine = ({employees}) => {
    const [start, setStart]=useState(moment().format('LL'))

    const prevDate=()=>{
        setStart(prev=>moment(prev).subtract(7, 'd').format('LL'))
    }
    const nextDate=()=>{
        setStart(prev=>moment(prev).add(7, 'd').format('LL'))
    }
    return (
        <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
                Schedule
            </h6>
        </div>
        <div className="card-body">
            <div className="timeLine-card">
                <button className="timeLine-btn" onClick={prevDate}><MdKeyboardArrowLeft /></button>
                <button className="timeLine-btn" onClick={nextDate}><MdKeyboardArrowRight /></button>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Pracownik</th>
                            <th>{start}</th>
                            <th>{moment(start).add(1, 'd').format('LL')}</th>
                            <th>{moment(start).add(2, 'd').format('LL')}</th>
                            <th>{moment(start).add(3, 'd').format('LL')}</th>
                            <th>{moment(start).add(4, 'd').format('LL')}</th>
                            <th>{moment(start).add(5, 'd').format('LL')}</th>
                            <th>{moment(start).add(6, 'd').format('LL')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee)=> <Employee key={employee.id} employee={employee} start={start}/>)}
                    </tbody>
                </table>
            </div>
    </div>
</div>
    )
}

export default TimeLine

